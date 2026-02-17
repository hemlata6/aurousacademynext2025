# Advanced Deployment Configuration - Linode + Nginx + Next.js

## Table of Contents
1. [Load Balancing & Clustering](#load-balancing--clustering)
2. [Performance Optimization](#performance-optimization)
3. [Security Hardening](#security-hardening)
4. [Monitoring & Logging](#monitoring--logging)
5. [CI/CD Integration](#cicd-integration)
6. [Scaling Options](#scaling-options)

## Load Balancing & Clustering

### PM2 Cluster Mode (Recommended for multi-core servers)

Edit `/var/www/aurous-pragyan/.pm2/ecosystem.config.js` or use the provided `ecosystem.config.js`:

```bash
# Using the provided ecosystem.config.js
cd /var/www/aurous-pragyan
pm2 start ecosystem.config.js

# Verify cluster instances
pm2 list
```

This uses all available CPU cores for better performance.

### Nginx Load Balancing (Multiple Servers)

If you have multiple Linode instances, configure Nginx to load balance:

```nginx
upstream next_app {
    # Round-robin load balancing
    server server1.example.com:3000;
    server server2.example.com:3000;
    server server3.example.com:3000;
    
    keepalive 64;
}

server {
    listen 80;
    server_name aurousacademy.com www.aurousacademy.com;

    location / {
        proxy_pass http://next_app;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Host $server_name;
    }
}
```

## Performance Optimization

### 1. Enable Nginx Gzip Compression

Edit `/etc/nginx/nginx.conf`:

```nginx
# In the http block
gzip on;
gzip_vary on;
gzip_types text/plain text/css text/xml text/javascript 
           application/x-javascript application/xml+rss 
           application/javascript application/json font/opentype 
           application/vnd.ms-fontobject image/svg+xml;
gzip_min_length 1000;
gzip_disable "msie6";
gzip_comp_level 6;
gzip_buffers 16 8k;
gzip_http_version 1.1;
```

Reload Nginx:
```bash
nginx -s reload
```

### 2. Enable Browser Caching

Add to your Nginx config for static assets:

```nginx
# Cache static assets for 1 year
location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
    expires 365d;
    add_header Cache-Control "public, immutable";
    access_log off;
}

# Cache HTML pages for 1 day
location ~* \.html$ {
    expires 1d;
    add_header Cache-Control "public";
}

# Don't cache API responses
location /api/ {
    expires -1;
    add_header Cache-Control "no-cache, no-store, must-revalidate";
}
```

### 3. Optimize Next.js Build

In `next.config.js`:

```javascript
module.exports = {
  compress: true,  // Enable Gzip
  poweredByHeader: false,  // Remove X-Powered-By header
  productionBrowserSourceMaps: false,  // Disable source maps in production
  swcMinify: true,  // Use SWC minification
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },
};
```

### 4. Increase Server Resources

Edit `/var/www/aurous-pragyan/ecosystem.config.js` for PM2:

```javascript
max_memory_restart: '1G',  // Restart if exceeds 1GB
instances: 4,  // Run 4 instances
exec_mode: 'cluster'
```

Edit `/etc/nginx/nginx.conf`:

```nginx
worker_processes auto;  # Auto-detect CPU cores
worker_connections 2048;  # Increase from default 768
keepalive_timeout 65;
client_max_body_size 20M;
```

## Security Hardening

### 1. Hide Nginx Version

Edit `/etc/nginx/nginx.conf`:

```nginx
server_tokens off;
```

### 2. Add Security Headers

Add to your Nginx server block:

```nginx
# Security headers
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "no-referrer-when-downgrade" always;
add_header Permissions-Policy "geolocation=(), microphone=(), camera=()" always;

# HSTS (enable only after verifying SSL works)
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
```

### 3. Rate Limiting

Protect against DDoS in Nginx config:

```nginx
# Define rate limit zone
limit_req_zone $binary_remote_addr zone=gen_limit:10m rate=10r/s;
limit_req_zone $binary_remote_addr zone=api_limit:10m rate=50r/m;

server {
    # General rate limiting
    limit_req zone=gen_limit burst=20 nodelay;
    
    # Stricter API rate limiting
    location /api/ {
        limit_req zone=api_limit burst=100 nodelay;
        proxy_pass http://next_app;
    }
}
```

### 4. Setup Firewall

```bash
# Install UFW
apt install -y ufw

# Allow SSH
ufw allow 22

# Allow HTTP
ufw allow 80

# Allow HTTPS
ufw allow 443

# Enable firewall
ufw enable
```

### 5. Fail2Ban Protection

```bash
# Install Fail2Ban
apt install -y fail2ban

# Create Nextjs/Nginx filter
nano /etc/fail2ban/filter.d/nextjs.conf
```

Add:

```ini
[Definition]
failregex = ^<HOST>.*HTTP/1\.[01]" 404
            ^<HOST>.*HTTP/1\.[01]" 403
            ^<HOST>.*"(GET|POST|PUT|DELETE).*HTTP/1\.[01]" 5[0-9]{2}
ignoreregex =
```

Create action rule:

```bash
nano /etc/fail2ban/jail.d/nextjs.conf
```

Add:

```ini
[nextjs]
enabled  = true
port     = http,https
filter   = nextjs
logpath  = /var/log/nginx/access.log
maxretry = 5
findtime = 600
bantime  = 3600
```

## Monitoring & Logging

### 1. Real-time Application Monitoring

```bash
# Monitor all PM2 processes
pm2 monit

# Log specific application
pm2 logs aurous-pragyan

# Log with filtering
pm2 logs aurous-pragyan --lines 100

# Clear logs
pm2 flush
```

### 2. Log Rotation

```bash
# Install PM2 logrotate module
pm2 install pm2-logrotate

# Configure log rotation
pm2 set pm2-logrotate:max_size 100M
pm2 set pm2-logrotate:retain 30
pm2 set pm2-logrotate:compress true
```

### 3. Nginx Log Analysis

```bash
# Real-time log view
tail -f /var/log/nginx/access.log

# Count requests by IP
awk '{print $1}' /var/log/nginx/access.log | sort | uniq -c | sort -rn

# Show top requested endpoints
awk '{print $7}' /var/log/nginx/access.log | sort | uniq -c | sort -rn | head -20

# View error log
tail -f /var/log/nginx/error.log
```

### 4. Monitor Server Resources

```bash
# Install monitoring tools
apt install -y htop iotop

# View real-time system stats
htop

# View disk I/O
iotop

# Check disk space
df -h

# Check memory usage
free -h

# Check CPU usage
top
```

## CI/CD Integration

### GitHub Actions Deployment

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Linode

on:
  push:
    branches: [ main, production ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Deploy to Linode
      uses: appleboy/ssh-action@master
      with:
        host: ${{ secrets.LINODE_HOST }}
        username: root
        key: ${{ secrets.LINODE_SSH_KEY }}
        script: |
          cd /var/www/aurous-pragyan
          git pull origin main
          npm install --production
          npm run build
          pm2 restart aurous-pragyan
```

### GitLab CI/CD

Create `.gitlab-ci.yml`:

```yaml
deploy:
  stage: deploy
  script:
    - mkdir -p ~/.ssh
    - echo "$SSH_PRIVATE_KEY" > ~/.ssh/id_rsa
    - chmod 600 ~/.ssh/id_rsa
    - ssh-keyscan -H $DEPLOY_SERVER >> ~/.ssh/known_hosts
    - ssh root@$DEPLOY_SERVER "cd /var/www/aurous-pragyan && git pull origin main && npm install --production && npm run build && pm2 restart aurous-pragyan"
  only:
    - main
```

## Scaling Options

### Vertical Scaling (Bigger Server)

```bash
# Check current resource usage
htop
df -h
free -h

# If approaching limits, upgrade Linode plan
# Then restart services to utilize new resources
pm2 restart all
systemctl restart nginx
```

### Horizontal Scaling (Multiple Servers)

1. Create additional Linode instances
2. Deploy application on each
3. Configure load balancer (Nginx or Linode NodeBalancer)

### Use Linode NodeBalancer

1. Create NodeBalancer in Linode Console
2. Add backend nodes (your Linode instances)
3. Configure health checks
4. Point domain to NodeBalancer

Update Nginx on load balancer:

```nginx
upstream backend_nodes {
    server 192.168.1.1:80;
    server 192.168.1.2:80;
    server 192.168.1.3:80;
}

server {
    listen 80;
    server_name aurousacademy.com;

    location / {
        proxy_pass http://backend_nodes;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

## Emergency Procedures

### Emergency Restart

```bash
# If application crashes
pm2 restart aurous-pragyan

# If all services down
pm2 resurrect

# Full restart
pm2 kill
pm2 start ecosystem.config.js
systemctl restart nginx
```

### Rollback Deployment

```bash
# View deployment history
git log --oneline

# Rollback to previous version
git revert HEAD
git push origin main

# Rebuild and restart
npm run build
pm2 restart aurous-pragyan
```

### Clear Cache

```bash
# PM2 cache
pm2 flush

# Nginx cache (if using cache config)
find /var/cache/nginx -type f -delete

# Browser cache (can't control server-side directly)
# Use cache-busting headers as shown above
```

## Troubleshooting Common Issues

### High Memory Usage
```bash
# Check which process is using memory
ps aux --sort=-%mem | head -20

# Increase PM2 restart threshold
pm2 set max_memory 1GB
pm2 save

# Monitor memory growth over time
watch -n 5 'ps aux | grep "npm start"'
```

### High CPU Usage
```bash
# Identify hot functions
pm2 profile <app_id>

# Use clustering if not already enabled
# Update instances in ecosystem.config.js
pm2 restart ecosystem.config.js
```

### Slow Response Times
```bash
# Check Nginx logs
tail -f /var/log/nginx/access.log | grep -v 200

# Monitor real-time response times
watch -n 1 'tail -20 /var/log/nginx/access.log | awk "{print \$10}"'

# Check database/API response times
# Ask your API provider about their performance
```
