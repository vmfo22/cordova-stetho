stetho
====

[![Build Status](https://travis-ci.org/disusered/cordova-stetho.svg)](https://travis-ci.org/disusered/cordova-stetho) [![Code Climate](https://codeclimate.com/github/disusered/cordova-stetho/badges/gpa.svg)](https://codeclimate.com/github/disusered/cordova-stetho) 

Facebook's Stetho for Cordova

<a href="https://raw.githubusercontent.com/disusered/cordova-stetho/docs/stetho.png">
  <img src="https://raw.githubusercontent.com/disusered/cordova-stetho/docs/stetho.png" width="480px" />
</a>

## Dependencies
Cordova is in the processes of migrating their plugin registry to NPM, after which dependencies will resolve automatically. In the meantime, this plugin has the following dependencies you need to install to your project prior to use:
```bash
npm install xml2js sax xmlbuilder --save-dev
```

## Install
```bash
cordova plugin add com.disusered.stetho
```

## Usage
Navigate to `chrome://inspect` and click "Inspect" to get started!

## Dependencies
- [Node](http://nodejs.org/)
- [Gradle](https://gradle.org/)
