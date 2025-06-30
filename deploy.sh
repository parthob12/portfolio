#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Add all changes
echo "Adding changes to git..."
git add .

# Commit changes
echo "Committing changes..."
git commit -m "Update portfolio - $(date)"

# Push to GitHub
echo "Pushing to GitHub..."
git push origin main

echo "Deployment complete! Your site will be updated at https://parthob12.github.io/portfolio/"
echo "Note: It may take a few minutes for the changes to appear on GitHub Pages." 