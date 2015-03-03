module.exports = function(context) {
  var fs     = require('fs');
  var xml2js = require('xml2js');

  var Q         = context.requireCordovaModule('q');
  var dfd       = new Q.defer();
  var parser    = new xml2js.Parser();
  var builder   = new xml2js.Builder();

  var output;
  var path;

  var manifestExists = false;

  try {
    path = context.opts.projectRoot + '/platforms/android/AndroidManifest.xml';
    manifestExists = fs.existsSync(path);
  } catch (error) {
    dfd.reject();
  }

  if (manifestExists) {
    fs.readFile(path, function(err, data) {
      parser.parseString(data, function(err, result) {
        var modified = result;

        function callback(err) {
          if (err) {
            console.log('cordova-stetho - Error writing AndroidManifest.xml');
            console.log(err);
          } else {
            console.log('cordova-stetho - AndroidManifest.xml updated');
          }
        }

        try {
          delete modified.manifest.application[0].$['android:name'];
          output = builder.buildObject(modified);
          fs.writeFile(path, output, callback);
        } catch (error) {
          dfd.reject('Uninstall failed, AndroidManifest.xml was not updated!');
        }
      });
    });
  } else {
    dfd.reject('Manifest not found at specified location');
  }

  return dfd.promise;
};
