#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
echo 'devdocs.qloapps.com' > CNAME

git init
git add -A
git commit -m 'Deploy QloApps docs to GitHub'

git push -f git@github.com:Qloapps/qloapps-docs.git master:gh-pages

cd -
