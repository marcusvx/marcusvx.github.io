#!/bin/bash
mkdir -p ./dist/api
cp ./server/*.php ./dist/api
cp -r ./server/vendor ./dist/api/vendor