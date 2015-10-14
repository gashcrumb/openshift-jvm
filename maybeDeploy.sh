#!/bin/bash

git config --global push.default matching
git fetch --tags

LATEST=`cat LATEST`
CURRENT=`git tag --list | grep -v build | sort --version-sort | tail -n 1`

echo "Latest on disk: $LATEST"
echo "Latest in repo: $CURRENT"

if [ "$CURRENT" != "$LATEST" ]
then
  echo "Deploying new build"
  git config --global user.email "circleci@mail.com" && \
  git config --global user.name "circleci" && \
  rm -Rf site/* && \
  echo "Cleaning and rebuilding" && \
  gulp site && \
  gulp deploy && \
  echo $CURRENT > LATEST && \
  git add LATEST && \
  git commit -m "Updating latest tag" && \
  git push && git push --tags
else
  echo "Not deploying new build"
fi

