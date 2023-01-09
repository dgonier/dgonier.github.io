git checkout --orphan gh-pages
npx quasar build
git --work-tree dist/spa add --all
git --work-tree dist commit -m gh-pages
git push origin HEAD:gh-pages --force
git checkout -f master
git branch -D gh-pages
