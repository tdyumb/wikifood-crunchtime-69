
# WikiFoods App

A community-driven recipe sharing platform developed for TSA.

## Features
- Recipe discovery
- Cuisine filters
- User accounts
- And more!

## Getting Started
Run `npm install` and then `npm run dev` to start the development server.

## Deployment

### Building for Production
```bash
npm run build
```
This will create a `dist` folder with the built application.

### Deployment Options

#### Option 1: Static Hosting (Netlify, Vercel, GitHub Pages)
Upload the contents of the `dist` directory to your hosting provider.

#### Option 2: Node.js Server
1. Build the application: `npm run build`
2. Install server dependencies: `npm install express compression helmet`
3. Start the server: `node server.js`

#### Option 3: Apache Server
1. Build the application: `npm run build`
2. Copy the contents of the `dist` directory to your Apache document root
3. Ensure the `.htaccess` file is included

#### Option 4: Nginx Server
1. Build the application: `npm run build`
2. Copy the contents of the `dist` directory to your Nginx document root
3. Use the provided `nginx.conf` as a template for your server configuration

### Environment Configuration
For production deployment, make sure to:
1. Set appropriate environment variables
2. Configure any backend API connections
3. Update security headers as needed

