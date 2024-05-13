#!/usr/bin/env bash

# first build it
yarn build

# run local build
#node build/index.js

# deploy to Socialcap server
rsync -vh -az ./build/ socialcap-dev:~/docs

# Rebuild docker and restart Nginx 
ssh socialcap-dev 'sudo -S /etc/init.d/nginx restart'
