#!/bin/bash
# Quick deploy script for GitHub Pages
# Usage: ./deploy.sh YOUR_GITHUB_USERNAME

if [ -z "$1" ]; then
  echo "Usage: ./deploy.sh YOUR_GITHUB_USERNAME"
  echo "Example: ./deploy.sh ashenjayasinghe"
  exit 1
fi

USERNAME=$1
REPO_NAME="${USERNAME}.github.io"

echo "🚀 Setting up GitHub Pages deployment..."
echo "Repository name: $REPO_NAME"

# Update robots.txt and sitemap.xml
echo "📝 Updating robots.txt and sitemap.xml..."
sed -i '' "s/YOUR_USERNAME/$USERNAME/g" robots.txt
sed -i '' "s/YOUR_USERNAME/$USERNAME/g" sitemap.xml

# Initialize git if not already done
if [ ! -d ".git" ]; then
  echo "📦 Initializing git repository..."
  git init
  git branch -M main
fi

# Add all files
echo "📦 Adding files..."
git add .

# Commit
echo "💾 Committing changes..."
git commit -m "Initial commit: portfolio site" || echo "No changes to commit"

# Set remote (will fail if already set, that's okay)
echo "🔗 Setting remote..."
git remote remove origin 2>/dev/null
git remote add origin "https://github.com/$USERNAME/$REPO_NAME.git"

echo ""
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Create repository '$REPO_NAME' on GitHub (https://github.com/new)"
echo "2. Make sure it's PUBLIC"
echo "3. Run: git push -u origin main"
echo "4. Go to Settings → Pages → Select 'main' branch → Save"
echo ""
echo "Your site will be live at: https://$USERNAME.github.io"

