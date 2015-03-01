module.exports = function(context) {
  var fs     = require('fs');
  var xml2js = require('xml2js');

  var Q         = context.requireCordovaModule('q');
  var dfd       = new Q.defer();
  var parser    = new xml2js.Parser();
  var platforms = context.opts.platforms;
  var android   = false;

  var path;

  if (platforms) {
    platforms.forEach(function(value) {
      if (value === 'android') { android = true; }
    });
  }

  if (android) {
    path = context.opts.projectRoot + '/platforms/android/AndroidManifest.xml';

    fs.readFile(path, function(err, data) {
      parser.parseString(data, function(err, result) {
        console.dir(result);
        dfd.resolve();
      });
    });

    console.log('cordova-stetho - AndroidManifest.xml updated');
  }

  return dfd.promise;
};
