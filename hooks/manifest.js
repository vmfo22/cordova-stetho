module.exports = function(context) {
  var Q    = context.requireCordovaModule('q');
  var dfd  = new Q.defer();

  dfd.resolve();
  console.log('cordova-stetho - AndroidManifest.xml updated');

  return dfd.promise;
};
