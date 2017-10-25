#!/usr/bin/env bash

pwd=`pwd`
BUILD_NAME="./output"

ENV=$2

clear() {
    cd $pwd
    if [ -d $BUILD_NAME ]; then
        rm -rf $BUILD_NAME
    fi
}

echo "[START] ================ Start Build  ================"
cd $pwd
clear

#    npm run build:$1 || exit 1
if [ x$ENV == 'xproduct' ]
then
    npm run build || exit 1
else
    npm run build:testing || exit 1
fi

cd $BUILD_NAME

tar zcvf output.tar.gz `ls .` > /dev/null 2>&1

echo "[DONE] ================ Build Completed ================"
