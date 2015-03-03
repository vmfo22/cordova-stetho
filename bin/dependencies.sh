#!/bin/bash
set -ev

# Install Cordova
npm install -g cordova

# Create Cordova project
cordova create $HOME/testApp com.bridge.test Test
cd $HOME/testApp

# Install dependency
npm install xml2js sax xmlbuilder --save-dev

# Install Android platform
cordova platform add android

# Install test framework
cordova plugin add \
  http://git-wip-us.apache.org/repos/asf/cordova-plugin-test-framework.git

# Add plugin and tests
cordova plugin add $TRAVIS_BUILD_DIR
