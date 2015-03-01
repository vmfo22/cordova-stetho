stetho
====

[![Circle CI](https://circleci.com/gh/disusered/cordova-stetho.svg?style=shield&circle-token=d69ac59bc02a653c4ce7418b979cc628980c3b89)](https://circleci.com/gh/disusered/cordova-stetho)

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
- Node
- Gradle
- Android SDK

## Todo
- [ ] Network inspection
- [X] Dependency management
- [X] Create plugin hook to add `<application android:name="com.bridge.CDVStetho">` in `AndroidManifest.xml`
- [X] Remove attribute on plugin uninstall
