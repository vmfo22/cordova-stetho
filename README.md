stetho
====

[![Build Status](https://travis-ci.org/disusered/cordova-stetho.svg)](https://travis-ci.org/disusered/cordova-stetho) [![Code Climate](https://codeclimate.com/github/disusered/cordova-stetho/badges/gpa.svg)](https://codeclimate.com/github/disusered/cordova-stetho) 

Facebook's Stetho for Cordova

<a href="https://raw.githubusercontent.com/disusered/cordova-stetho/docs/stetho.png">
  <img src="https://raw.githubusercontent.com/disusered/cordova-stetho/docs/stetho.png" width="480px" />
</a>

## Install
```bash
cordova plugin add com.bridge.stetho
```

## Usage
Navigate to `chrome://inspect` and click "Inspect" to get started!

## Dependencies
- [Node](http://nodejs.org/)
- [Gradle](https://gradle.org/)
- [Android SDK](http://developer.android.com/sdk/installing/index.html?pkg=tools)

## Todo
- [ ] Network inspection
- [X] Dependency management
- [X] Create plugin hook to add `<application android:name="com.bridge.CDVStetho">` in `AndroidManifest.xml`
- [X] Remove attribute on plugin uninstall
