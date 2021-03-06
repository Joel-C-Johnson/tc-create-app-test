#!/bin/sh

BRANCH="feature-cn-897-add-row-below-deleted-rows"
CURDIR=`pwd`
PROJDIR=`basename $CURDIR`

if [ "$PROJDIR" != "tc-create-app" ]
then
  echo "Script must be run from ./tc-create-app"
  exit
fi

echo Assumptions:
echo All project folders are at same level
echo All branch names for each project folder are the same 

echo _________________________________
echo Working on datatable-translatable
echo
cd ../datatable-translatable
git switch master
git pull 
git switch $BRANCH
git pull
yalc remove --all
yarn install
yalc publish


echo ________________________
echo Working on tc-create-app
echo
cd ../tc-create-app
echo First, remove any existing yalc links
yalc remove --all
git switch develop
git pull 

yalc link datatable-translatable
yarn install
yarn start
