# Deployment Quick Reference - Command Cheat Sheet

## Initial Setup Commands (Run Once)

```bash
# Connect to server
ssh root@YOUR_LINODE_IP

# System updates
apt update && apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt install -y nodejs

# Install PM2
npm install -g pm2

# Startup PM2 on boot
pm2 startup
pm2 save

# Install Nginx
apt install -y nginx

# Start and enable Nginx
systemctl start nginx
systemctl enable nginx

# Install Git
apt install -y git

# Clone your repository
git clone YOUR_REPO_URL /var/www/aurous-pragyan
cd /var/www/aurous-pragyan

# Install dependencies
npm install --production

# Build application
npm run build

# Start application
pm2 start npm --name "aurous-pragyan" -- start
pm2 save

# Configure Nginx
cp nginx.conf /etc/nginx/sites-available/aurous-pragyan
ln -s /etc/nginx/sites-available/aurous-pragyan /etc/nginx/sites-enabled/
rm /etc/nginx/sites-enabled/default

# Test and reload Nginx
nginx -t
systemctl restart nginx

# Set up SSL (optional but recommended)
apt install -y certbot python3-certbot-nginx
certbot --nginx -d aurousacademy.com
```

## Daily Operations

### Status Checks

```bash
# Check application status
pm2 list
pm2 status

# Check Nginx status
systemctl status nginx

# Check if ports are listening
netstat -tulpn | grep LISTEN
ss -tulpn | grep LISTEN

# Check server resources
top
htop
df -h
free -h

# View application logs
pm2 logs aurous-pragyan
pm2 logs aurous-pragyan --lines 50

# View Nginx logs
tail -f /var/log/nginx/access.log
tail -f /var/log/nginx/error.log

# Specific IP access
grep "192.168.1.1" /var/log/nginx/access.log
```

### Application Management

```bash
# Start application
pm2 start aurous-pragyan

# Stop application
pm2 stop aurous-pragyan

# Restart application
pm2 restart aurous-pragyan

# Delete application from PM2
pm2 delete aurous-pragyan

# Start application from ecosystem.config.js
pm2 start ecosystem.config.js

# Restart with no downtime
pm2 reload aurous-pragyan

# Monitor in real-time
pm2 monit

# Show detailed app info
pm2 show aurous-pragyan

# Get process ID
pm2 pid aurous-pragyan

# Get process port
pm2 web  # Opens web dashboard on http://localhost:9615
```

### Nginx Management

```bash
# Test configuration
nginx -t

# Reload configuration (no downtime)
nginx -s reload
systemctl reload nginx

# Restart Nginx
systemctl restart nginx

# Stop Nginx
systemctl stop nginx

# Start Nginx
systemctl start nginx

# View enabled sites
ls /etc/nginx/sites-enabled/

# View available sites
ls /etc/nginx/sites-available/

# Disable a site
rm /etc/nginx/sites-enabled/site-name

# Enable a site
ln -s /etc/nginx/sites-available/site-name /etc/nginx/sites-enabled/

# View Nginx version
nginx -v

# View Nginx configuration
cat /etc/nginx/nginx.conf
```

## Deployment

### Update Application

```bash
# Pull latest code
cd /var/www/aurous-pragyan
git pull origin main

# Install dependencies
npm install --production

# Build
npm run build

# Restart application
pm2 restart aurous-pragyan

# Verify
pm2 logs aurous-pragyan
```

### Or use deployment script

```bash
chmod +x deploy.sh
./deploy.sh
```

## Environment Variables

```bash
# Edit environment file
nano /var/www/aurous-pragyan/.env.local

# Add variables like:
# NEXT_PUBLIC_API_BASE_URL=https://prodapi.classiolabs.com/
# PORT=3000

# Save (Ctrl+O, Enter, Ctrl+X)

# Apply changes
pm2 restart aurous-pragyan
```

## Troubleshooting

### Application Issues

```bash
# Check if port is in use
lsof -i :3000
netstat -tulpn | grep 3000

# Kill process on port
kill -9 PID

# View detailed error logs
pm2 logs aurous-pragyan --err
journalctl -u aurous-pragyan -n 50

# Test application locally
curl http://localhost:3000

# Rebuild application
cd /var/www/aurous-pragyan
npm run build

# Clear Node modules and reinstall
rm -rf node_modules package-lock.json
npm install --production
npm run build
pm2 restart aurous-pragyan
```

### Nginx Issues

```bash
# Test configuration
nginx -t

# Check syntax errors
nginx -T

# View current connections
netstat -an | grep ESTABLISHED | wc -l

# Check logs for errors
tail -100 /var/log/nginx/error.log

# Check specific domain logs
grep "aurousacademy.com" /var/log/nginx/access.log

# Monitor real-time
tail -f /var/log/nginx/access.log
```

### Git Issues

```bash
# Generate SSH key for git
ssh-keygen -t rsa -b 4096

# Display public key
cat ~/.ssh/id_rsa.pub

# Check git remote
git remote -v

# Update git remote
git remote set-url origin https://new-url

# Verify git connection
ssh -T git@github.com

# Check git status
git status

# View commit history
git log --oneline -10
```

### SSL/HTTPS Issues

```bash
# Check certificate validity
openssl x509 -in /etc/letsencrypt/live/aurousacademy.com/cert.pem -text -noout

# Test HTTPS connection
curl -I https://aurousacademy.com

# Renew certificate manually
certbot renew

# Check certificate expiration
certbot certificates

# Test auto-renewal
certbot renew --dry-run
```

## Monitoring & Maintenance

### Regular Tasks

```bash
# Check certificate expiration
certbot certificates

# Check disk space
df -h
du -sh /var/www/aurous-pragyan

# Check application size
ls -lh /var/www/aurous-pragyan/.next

# Backup application
tar -czf aurous-pragyan-$(date +%Y%m%d-%H%M%S).tar.gz /var/www/aurous-pragyan
```

### Process Management

```bash
# Monitor all processes
pm2 monit

# Show process info
pm2 show aurous-pragyan

# List all processes
pm2 list

# Delete all processes
pm2 delete all

# Kill PM2 daemon
pm2 kill

# Resurrect processes
pm2 resurrect

# Flush logs
pm2 flush

# Save state
pm2 save

# Load state
pm2 start ecosystem.config.js
```

## Performance Tuning

### Check Server Limits

```bash
# View current limits
ulimit -a

# View file descriptor limits
cat /proc/sys/fs/file-max

# View max processes
cat /proc/sys/kernel/pid_max

# View network limits
netstat -an | wc -l
```

### Increase Limits (if needed)

```bash
# Edit limits.conf
nano /etc/security/limits.conf

# Add lines:
# * soft nofile 65535
# * hard nofile 65535
# * soft nproc 32768
# * hard nproc 32768

# Reload
sysctl -p
```

## Security

### Firewall

```bash
# View firewall status
ufw status

# Allow SSH
ufw allow 22

# Allow HTTP
ufw allow 80

# Allow HTTPS
ufw allow 443

# Deny a port
ufw deny PORT

# Enable firewall
ufw enable

# Disable firewall
ufw disable
```

### User Management

```bash
# Create www-data user if not exists
useradd -r -s /bin/bash www-data

# Add user to sudoers
usermod -aG sudo username

# Change file ownership
chown -R www-data:www-data /var/www/aurous-pragyan

# Set permissions
chmod 755 /var/www/aurous-pragyan
chmod 644 /var/www/aurous-pragyan/.env.local
```

## System Information

```bash
# View OS info
cat /etc/os-release
lsb_release -a

# View kernel version
uname -r

# View CPU info
nproc
cat /proc/cpuinfo

# View memory info
free -h
cat /proc/meminfo

# View disk info
lsblk
df -h
du -sh /var/www/

# View network info
ip addr show
ip route show
```

## Helpful Links

- [PM2 Commands](https://pm2.keymetrics.io/docs/usage/pm2-doc-single-page/)
- [Nginx Documentation](https://nginx.org/en/docs/)
- [Next.js Deployment](https://nextjs.org/docs/deployment/static-exports)
- [Certbot Documentation](https://certbot.eff.org/docs/)
- [Linux Commands Reference](https://man.linuxdao.cn/)
