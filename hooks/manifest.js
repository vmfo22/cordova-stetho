module.exports = function(context) {
  var fs     = require('fs');
  var xml2js = require('xml2js');

  var Q         = context.requireCordovaModule('q');
  var dfd       = new Q.defer();
  var parser    = new xml2js.Parser();
  var builder   = new xml2js.Builder();
  var platforms = context.opts.platforms;
  var android   = false;

  var path;
  var output;

  if (platforms) {
    platforms.forEach(function(value) {
      if (value === 'android') { android = true; }
    });
  }

  if (android) {
    path = context.opts.projectRoot + '/platforms/android/AndroidManifest.xml';

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

  }

  return dfd.promise;
};
