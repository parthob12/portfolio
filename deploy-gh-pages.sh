#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Create or switch to gh-pages branch
echo "Setting up gh-pages branch..."
git checkout -b gh-pages 2>/dev/null || git checkout gh-pages

# Remove all files except dist
echo "Cleaning gh-pages branch..."
git rm -rf . 2>/dev/null || true

# Copy built files to root
echo "Copying built files..."
cp -r dist/* .

# Add all files
echo "Adding files to git..."
git add .

# Commit changes
echo "Committing changes..."
git commit -m "Deploy to GitHub Pages - $(date)"

# Push to gh-pages branch
echo "Pushing to gh-pages branch..."
git push origin gh-pages --force

# Switch back to main branch
echo "Switching back to main branch..."
git checkout main

echo "Deployment complete! Your site will be updated at https://parthob12.github.io/portfolio/"
echo "Note: It may take a few minutes for the changes to appear on GitHub Pages." 