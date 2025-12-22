#!/bin/bash
# Exit on error
set -e

# Verify we're in the right directory (should have _config.yml)
if [ ! -f "_config.yml" ]; then
    echo "Error: Must run from Jekyll site root directory"
    exit 1
fi

# Store the current branch name
ORIGINAL_BRANCH=$(git branch --show-current)

# build the site and copy the files to a temporary directory:
bundle exec jekyll build || { echo "Jekyll build failed"; exit 1; }
TEMP_DIR=$(mktemp -d)
rsync -av --exclude='node_modules' --exclude='*.pyc' _site/ "$TEMP_DIR"

# checkout gh-pages or create it if it doesn't exist:
if git show-ref --verify --quiet refs/heads/gh-pages; then
    # Branch exists, checkout and clean
    git checkout gh-pages
    git rm -rf . 2>/dev/null || true
else
    # Branch doesn't exist, create it as orphan branch
    git checkout --orphan gh-pages
    git rm -rf . 2>/dev/null || true
fi
rm -rf _site .sass-cache Gemfile.lock

# create .gitignore file to exclude unnecessary files
echo "_site
.sass-cache
.md
.sh
.yml
Gemfile
Gemfile.lock" > .gitignore

# copy the new site files to the gh-pages branch:
cp -r "$TEMP_DIR"/* . || { echo "Failed to copy files"; exit 1; }

# commit changes and send them to GitHub:
git add .
git commit -m 'Updated gh-pages with new site content'
git push origin gh-pages  # Removed -f to prevent accidental force pushes

# clean up:
git checkout "$ORIGINAL_BRANCH"
rm -rf _site "$TEMP_DIR"
echo "Deployment completed successfully!"
