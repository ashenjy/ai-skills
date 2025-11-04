# How to Deploy to GitHub Pages

## Step-by-Step Instructions

### Option 1: Using GitHub Web Interface (Easiest)

1. **Create a new repository on GitHub**
   - Go to https://github.com/new
   - Name it `your-username.github.io` (replace `your-username` with your GitHub username)
   - Make it **Public** (required for free GitHub Pages)
   - Don't initialize with README, .gitignore, or license

2. **Push your files to GitHub**
   ```bash
   cd /Users/ashenjayasinghe/Desktop/Coding/portfolio-site
   git init
   git add .
   git commit -m "Initial commit: portfolio site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
   git push -u origin main
   ```
   (Replace `YOUR_USERNAME` with your actual GitHub username)

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages** (in left sidebar)
   - Under "Source", select:
     - Branch: `main`
     - Folder: `/ (root)`
   - Click **Save**
   - Wait 1-2 minutes for deployment

4. **Visit your site**
   - Your site will be live at: `https://YOUR_USERNAME.github.io`
   - (GitHub will show the URL in the Pages settings)

### Option 2: Using GitHub CLI (Faster)

```bash
cd /Users/ashenjayasinghe/Desktop/Coding/portfolio-site
gh repo create YOUR_USERNAME.github.io --public --source=. --remote=origin --push
```

Then enable Pages in Settings → Pages (same as step 3 above).

## Before You Deploy

1. **Update `robots.txt` and `sitemap.xml`**
   - Replace `YOUR_USERNAME` with your actual GitHub username in both files

2. **Update social links in `index.html`**
   - Find the LinkedIn and GitHub links (around line 306 and 544)
   - Replace `#` with your actual profile URLs

3. **Optional: Update JSON-LD schema**
   - In `index.html`, update the `url` field in the JSON-LD script (around line 263) with your GitHub Pages URL

## After Deployment

- Your site will auto-update when you push changes to the `main` branch
- Changes usually appear within 1-2 minutes
- Check deployment status in: Repository → **Actions** tab

## Troubleshooting

- **404 errors**: Make sure you're using `your-username.github.io` as the repo name
- **Styles not loading**: Check that asset paths start with `/` (e.g., `/assets/css/styles.css`)
- **Theme toggle not working**: Check browser console for JavaScript errors

## Custom Domain (Optional)

If you want to use your own domain:

1. Add domain in GitHub → Settings → Pages → Custom domain
2. Create DNS records:
   - Type: `A`
   - Value: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Or use `CNAME` pointing to `YOUR_USERNAME.github.io`
3. Create `CNAME` file in repo root with just your domain name (e.g., `ashenjayasinghe.com`)

