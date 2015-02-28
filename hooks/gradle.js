module.exports = function(context) {
  var Q    = context.requireCordovaModule('q');
  var exec = require('child_process').exec;
  var dfd  = new Q.defer();

  console.log('Gradle hook fired');

  exec('gradle getDeps', function() {
    dfd.resolve();
    console.log('Dependencies downloaded for Stetho');
  });

  return dfd.promise;
};
