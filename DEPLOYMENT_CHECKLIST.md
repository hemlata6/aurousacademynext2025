# Quick Deployment Checklist - Linode + Nginx + Next.js

## Pre-Deployment Checklist

- [ ] Have your Linode server IP address or domain name
- [ ] Have SSH access to the server
- [ ] Have admin/root access to the server
- [ ] (Optional) Have a domain name pointed to your Linode IP
- [ ] Have your git repository URL ready
- [ ] Have any API keys or environment variables documented

## Server Setup (Run Once)

```bash
# Connect to server
ssh root@YOUR_LINODE_IP

# Update system
apt update && apt upgrade -y

# Install Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt install -y nodejs

# Install PM2 globally
npm install -g pm2
pm2 startup
pm2 save

# Install Nginx
apt install -y nginx
systemctl start nginx
systemctl enable nginx

# Install Git (if not already installed)
apt install -y git
```

## Application Deployment

```bash
# Create application directory
mkdir -p /var/www/aurous-pragyan
cd /var/www/aurous-pragyan

# Clone repository
git clone YOUR_REPO_URL .

# Install dependencies
npm install --production

# Build the application
npm run build

# Start with PM2
pm2 start npm --name "aurous-pragyan" -- start
pm2 save

# Verify it's running
pm2 list
```

## Nginx Configuration

```bash
# Copy the nginx.conf file from the project to Nginx sites-available
cp nginx.conf /etc/nginx/sites-available/aurous-pragyan

# Enable the site
ln -s /etc/nginx/sites-available/aurous-pragyan /etc/nginx/sites-enabled/

# Remove default site (optional)
rm /etc/nginx/sites-enabled/default

# Test Nginx configuration
nginx -t

# Restart Nginx
systemctl restart nginx
```

## SSL Certificate Setup (Recommended)

```bash
# Install Certbot
apt install -y certbot python3-certbot-nginx

# Get SSL certificate
certbot --nginx -d aurousacademy.com -d www.aurousacademy.com

# Check auto-renewal
systemctl status certbot.timer
```

## Environment Variables

```bash
# Create .env.local file
nano /var/www/aurous-pragyan/.env.local

# Add your variables:
# NEXT_PUBLIC_API_BASE_URL=https://prodapi.classiolabs.com/

# Restart the app to apply changes
pm2 restart aurous-pragyan
```

## Verification Steps

- [ ] SSH into server
- [ ] Check PM2 status: `pm2 list`
- [ ] Check Nginx status: `systemctl status nginx`
- [ ] Check logs: `pm2 logs aurous-pragyan`
- [ ] Visit http://YOUR_LINODE_IP in browser
- [ ] Verify static assets are loading
- [ ] Verify API calls are working
- [ ] Check SSL certificate (if using domain)

## Troubleshooting

### Application won't start
```bash
pm2 logs aurous-pragyan
pm2 delete aurous-pragyan
pm2 start npm --name "aurous-pragyan" -- start
```

### Port 3000 already in use
```bash
lsof -i :3000
kill -9 PID  # Replace PID with the process ID
```

### Nginx errors
```bash
nginx -t  # Test configuration
tail -f /var/log/nginx/error.log
tail -f /var/log/nginx/access.log
```

### Git pull permission denied
```bash
# Generate SSH key on server for git
ssh-keygen -t rsa -b 4096
cat ~/.ssh/id_rsa.pub  # Copy and add to your git hosting provider
```

## Maintenance

### Regular Updates
```bash
cd /var/www/aurous-pragyan
git pull origin main
npm install --production
npm run build
pm2 restart aurous-pragyan
```

### Or use the deployment script
```bash
chmod +x deploy.sh
./deploy.sh
```

### Monitor resources
```bash
pm2 monit
```

### View application status
```bash
pm2 status
pm2 show aurous-pragyan
```

## Backup

```bash
# Backup application
tar -czf aurous-pragyan-backup-$(date +%Y%m%d).tar.gz /var/www/aurous-pragyan

# Backup Nginx config
tar -czf nginx-backup-$(date +%Y%m%d).tar.gz /etc/nginx
```

## File Locations

| File | Location |
|------|----------|
| Application | `/var/www/aurous-pragyan` |
| Nginx Config | `/etc/nginx/sites-available/aurous-pragyan` |
| Nginx Config (enabled) | `/etc/nginx/sites-enabled/aurous-pragyan` |
| Nginx logs | `/var/log/nginx/` |
| PM2 logs | `~/.pm2/logs/` |
| SSL Certificates | `/etc/letsencrypt/live/aurousacademy.com/` |

## Support Resources

- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Nginx Documentation](https://nginx.org/en/docs/)
- [PM2 Documentation](https://pm2.keymetrics.io/docs)
- [Certbot Documentation](https://certbot.eff.org/docs/)
- [Linode Documentation](https://www.linode.com/docs/)
