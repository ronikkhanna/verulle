# Verullè — Premium Luxury Knitwear

A premium luxury knitwear website featuring handcrafted Italian mohair blends.

## Deployment to Vercel

### Option 1: Deploy with GitHub (Recommended)

1. **Create a GitHub repository**
   - Go to https://github.com/new
   - Create a new repository called `verulle` (or similar)
   - Do NOT initialize with README (we already have one)

2. **Push code to GitHub**
   ```bash
   cd path/to/verulle
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/verulle.git
   git push -u origin main
   ```

3. **Deploy to Vercel**
   - Go to https://vercel.com/new
   - Import your GitHub repository
   - Click Deploy
   - Your site will be live at `verulle.vercel.app`

### Option 2: Deploy with Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   cd path/to/verulle
   vercel
   ```

3. **Follow prompts** and your site will be deployed

## Features

- Luxury minimal design
- Product modal with size selection
- Shopping cart functionality
- Responsive layout
- Smooth scroll navigation
- Cosmic element collection

## Files

- `index.html` - Main HTML structure
- `styles.css` - All styling
- `script.js` - Interactive functionality
- `vercel.json` - Vercel deployment config
- Images: `cosmos.png`, `cosmos-celestial.png`
