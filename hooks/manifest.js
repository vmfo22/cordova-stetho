module.exports = function(context) {
  var fs     = require('fs');
  var xml2js = require('xml2js');

  var Q         = context.requireCordovaModule('q');
  var dfd       = new Q.defer();
  var parser    = new xml2js.Parser();
  var builder   = new xml2js.Builder();

  var output;
  var path = context.opts.projectRoot +
             '/platforms/android/AndroidManifest.xml';
  var androidExists = fs.existsSync(path);

  if (androidExists) {
    fs.readFile(path, function(err, data) {
      parser.parseString(data, function(err, result) {
        var modified = result;
        var stetho = 'com.bridge.CDVStetho';

        modified.manifest.application[0].$['android:name'] = stetho;
        output = builder.buildObject(modified);

        fs.writeFile(path, output, function(err) {
          if (err) {
            console.log('cordova-stetho - Error writing AndroidManifest.xml');
            console.log(err);
          } else {
            console.log('cordova-stetho - AndroidManifest.xml updated');
          }
        });

        dfd.resolve();
      });
    });
  } else {
    console.log('AndroidManifest.xml not found!');
    console.log('This means the Android platform hasn\t been added to ' +
                'the cordova project. Once added, Stetho won\'t work' +
                'unless you add the following to the <application> node' +
                'in /platforms/android/AndroidManifest.xml: ' +
                'android:name="com.bridge.CDVStetho"');
    console.log('Ex: <application ... android:name="com.bridge.CDVStetho">');
  }

  return dfd.promise;
};
