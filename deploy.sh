#!/bin/sh
npm run build
rm -rf docs
cp -R build docs
git add .
git commit -am "$1"
git push