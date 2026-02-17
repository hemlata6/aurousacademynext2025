# Deployment Guide - Linode + Nginx + Next.js

This guide will help you deploy the Aurous Pragyan Next.js application to a Linode server with Nginx.

## Prerequisites

- Linode account with a running Ubuntu 20.04+ server
- SSH access to your Linode server
- Domain name (optional, but recommended)
- Node.js 18+ and npm installed on your server

## Step 1: Server Setup

### 1.1 Connect to Your Linode Server

```bash
ssh root@your_linode_ip_address
```

### 1.2 Update System
```bash
apt update
apt upgrade -y
```

### 1.3 Install Node.js and npm

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt install -y nodejs
node --version
npm --version
```

### 1.4 Install PM2 (Process Manager)

PM2 will keep your application running and restart it if it crashes.

```bash
npm install -g pm2
pm2 startup
pm2 save
```

### 1.5 Install Nginx

```bash
apt install -y nginx
systemctl start nginx
systemctl enable nginx
```

## Step 2: Prepare Your Application

### 2.1 Build the Application Locally (Optional but Recommended)

```bash
npm install
npm run build
```

This creates an optimized production build in the `.next` folder.

## Step 3: Deploy to Linode

### 3.1 Create Application Directory

```bash
mkdir -p /var/www/aurous-pragyan
cd /var/www/aurous-pragyan
```

### 3.2 Clone or Upload Your Repository

**Option A: Using Git (Recommended)**

```bash
cd /var/www/aurous-pragyan
git clone https://your-repo-url.git .
```

**Option B: Using SCP (Upload directly)**

From your local machine:
```bash
scp -r ./* root@your_linode_ip:/var/www/aurous-pragyan/
```

### 3.3 Install Dependencies on Server

```bash
cd /var/www/aurous-pragyan
npm install --production
```

Or if you haven't built locally:
```bash
npm install
npm run build
```

## Step 4: Configure Nginx

### 4.1 Create Nginx Configuration

Create a new Nginx configuration file:

```bash
nano /etc/nginx/sites-available/aurous-pragyan
```

Paste the configuration (see `nginx.conf` in the project root).

### 4.2 Enable the Configuration

```bash
ln -s /etc/nginx/sites-available/aurous-pragyan /etc/nginx/sites-enabled/
```

### 4.3 Remove Default Configuration (Optional)

```bash
rm /etc/nginx/sites-enabled/default
```

### 4.4 Test Nginx Configuration

```bash
nginx -t
```

You should see:
```
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration will be successful
```

### 4.5 Restart Nginx

```bash
systemctl restart nginx
```

## Step 5: Start the Application with PM2

### 5.1 Start the Application

```bash
cd /var/www/aurous-pragyan
pm2 start npm --name "aurous-pragyan" -- start
pm2 save
```

### 5.2 Verify It's Running

```bash
pm2 list
pm2 logs aurous-pragyan
```

## Step 6: Set Up SSL Certificate (Optional but Highly Recommended)

### 6.1 Install Certbot

```bash
apt install -y certbot python3-certbot-nginx
```

### 6.2 Get SSL Certificate

```bash
certbot --nginx -d aurousacademy.com -d www.aurousacademy.com
```

Certbot will automatically update your Nginx configuration with SSL settings.

### 6.3 Enable Auto-Renewal

```bash
systemctl enable certbot.timer
systemctl start certbot.timer
```

## Step 7: Set Up Environment Variables

### 7.1 Create .env.local File

```bash
nano /var/www/aurous-pragyan/.env.local
```

Add your environment variables - if NEXT_PUBLIC_API_BASE_URL needs to be different in production, add it here:

```
NEXT_PUBLIC_API_BASE_URL=https://your-api-base-url.com/
```

### 7.2 Restart the Application

```bash
pm2 restart aurous-pragyan
pm2 save
```

## Step 8: Verify Deployment

- Open your browser and navigate to `http://your_linode_ip` or `https://aurousacademy.com`
- The application should be loading

## Troubleshooting

### Check Application Logs

```bash
pm2 logs aurous-pragyan
```

### Check Nginx Logs

```bash
tail -f /var/log/nginx/access.log
tail -f /var/log/nginx/error.log
```

### Restart Services

```bash
# Restart Next.js application
pm2 restart aurous-pragyan

# Restart Nginx
systemctl restart nginx
```

### Check if Port 5000 is in Use

```bash
lsof -i :5000
netstat -tulpn | grep :5000
```

### Clear Nginx Cache

```bash
nginx -s reload
```

## Continuous Deployment (CI/CD)

To automatically deploy when you push to your repository:

1. Set up a webhook in your Git platform (GitHub, GitLab, etc.)
2. Create a deployment script on your server
3. Configure the webhook to trigger the script

### Sample Deployment Script

Create `/var/www/aurous-pragyan/deploy.sh`:

```bash
#!/bin/bash
cd /var/www/aurous-pragyan
git pull origin main
npm install
npm run build
pm2 restart aurous-pragyan
```

Give it execution permissions:
```bash
chmod +x /var/www/aurous-pragyan/deploy.sh
```

## Monitoring and Maintenance

### Monitor Resource Usage

```bash
pm2 monit
```

### View Process Details

```bash
pm2 show aurous-pragyan
```

### Set Up Log Rotation

PM2 can handle log rotation automatically:

```bash
pm2 install pm2-logrotate
```

## Backup and Disaster Recovery

Make regular backups of your application and database:

```bash
# Backup the application
tar -czf aurous-pragyan-backup-$(date +%Y%m%d).tar.gz /var/www/aurous-pragyan

# Upload to safe location or cloud storage
```

## Performance Optimization

### Enable Gzip Compression in Nginx

This is already configured in the provided `nginx.conf`.

### Increase Worker Connections

Edit `/etc/nginx/nginx.conf`:

```nginx
worker_connections 2048;
```

## Notes

- The application runs on port 3000 internally, Nginx proxies it to port 80/443
- PM2 ensures the application restarts automatically if it crashes
- SSL certificates auto-renew 30 days before expiration
- Regular backups are recommended

For more information, visit:
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment/static-exports)
- [Nginx Documentation](https://nginx.org/en/docs/)
- [PM2 Documentation](https://pm2.keymetrics.io/)
