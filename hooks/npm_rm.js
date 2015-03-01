module.exports = function(context) {
  var Q    = context.requireCordovaModule('q');
  var exec = require('child_process').exec;
  var dfd  = new Q.defer();

  exec('npm uninstall xml2js --save-dev', {
    cwd: context.opts.plugin.dir
  }, function() {
    dfd.resolve();
    console.log('cordova-stetho - Node modules uninstalled');
  });

  return dfd.promise;
};
