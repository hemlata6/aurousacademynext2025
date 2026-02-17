#!/bin/bash

# Aurous Pragyan Deployment Script for Linode + Nginx
# This script handles pulling updates, building, and restarting the application

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
APP_DIR="/var/www/aurous-pragyan"
APP_NAME="aurous-pragyan"
BRANCH="main"  # Change this to your desired branch

echo -e "${YELLOW}========================================${NC}"
echo -e "${YELLOW}Aurous Pragyan Deployment Script${NC}"
echo -e "${YELLOW}========================================${NC}"

# Check if app directory exists
if [ ! -d "$APP_DIR" ]; then
    echo -e "${RED}Error: Application directory not found at $APP_DIR${NC}"
    exit 1
fi

cd "$APP_DIR"

# Step 1: Pull latest code
echo -e "${YELLOW}[1/5] Pulling latest code from $BRANCH branch...${NC}"
git pull origin "$BRANCH" || {
    echo -e "${RED}Error: Failed to pull from git${NC}"
    exit 1
}

# Step 2: Install dependencies
echo -e "${YELLOW}[2/5] Installing dependencies...${NC}"
npm install --production || {
    echo -e "${RED}Error: Failed to install dependencies${NC}"
    exit 1
}

# Step 3: Build the application
echo -e "${YELLOW}[3/5] Building Next.js application...${NC}"
npm run build || {
    echo -e "${RED}Error: Build failed${NC}"
    exit 1
}

# Step 4: Stop the current application
echo -e "${YELLOW}[4/5] Restarting application...${NC}"
pm2 restart "$APP_NAME" || {
    echo -e "${RED}Error: Failed to restart application${NC}"
    exit 1
}

# Step 5: Verify the application is running
echo -e "${YELLOW}[5/5] Verifying application status...${NC}"
pm2 list "$APP_NAME"

echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}Deployment completed successfully!${NC}"
echo -e "${GREEN}========================================${NC}"

# Display logs
echo -e "${YELLOW}Recent logs:${NC}"
pm2 logs "$APP_NAME" --lines 10

echo -e "${GREEN}✓ Application is ready at https://aurousacademy.com${NC}"
