cd ~/personal-site-22

echo "Pulling site repo"
git pull
npm ci -f
npm run build

echo "Restarting service"
pm2 restart next