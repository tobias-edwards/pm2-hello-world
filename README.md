# PM2 Hello World

A basic Express app ran with PM2.

1. Install dependencies
   `npm install pm2@latest -g`
   `npm install`

2. Run app with PM2
   `pm2 start ecosystem.config.js`
   `pm2 logs`

You can also run PM2 in the foreground, effectively combining the above commands together: `pm2 start ecosystem.config.js --no-daemon`.

**Tip**: Run `pm2 examples` for some basic PM2 usage examples.
