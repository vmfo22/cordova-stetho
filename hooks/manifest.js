module.exports = function(context) {
  var Q    = context.requireCordovaModule('q');
  var dfd  = new Q.defer();

  dfd.resolve();
  console.log('AndroidManifest.xml updated');

  return dfd.promise;
};
