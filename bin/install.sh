#!/bin/bash
set -ev

# Go to Cordova project directory
cd $TRAVIS_BUILD_DIR/test

# Build Android APK
cordova build android

# Install APK
adb install platforms/android/ant-build/CordovaApp-debug.apk
