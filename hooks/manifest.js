function editManifest(op, context) {
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
        var stetho = 'com.disusered.CDVStetho';

        function callback(err) {
          if (err) {
            console.log(err);
            dfd.reject();
          } else {
            console.log('Updated AndroidManifest.xml');
            dfd.resolve();
          }
        }

        try {
          if (op === 'add') {
            modified.manifest.application[0].$['android:name'] = stetho;
          } else if (op === 'delete') {
            delete modified.manifest.application[0].$['android:name'];
          }
          output = builder.buildObject(modified);
          fs.writeFile(path, output, callback);
        } catch (error) {
          dfd.reject();
        }
      });
    });
  } else {
    dfd.reject();
  }

  return dfd.promise;
}

module.exports = {
  add: editManifest.bind(this, 'add'),
  delete: editManifest.bind(this, 'delete')
};
