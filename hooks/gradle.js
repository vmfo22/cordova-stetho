module.exports = function(context) {
  'use strict';

  var Q     = context.requireCordovaModule('q');
  var spawn = require('child_process').spawn;
  var dfd   = new Q.defer();

  console.log('Installing dependencies with Gradle');
  var build = spawn('gradle', ['getDeps'], {
    cwd: context.opts.plugin.dir
  });

  build.stdout.on('data', function(data) {
    process.stdout.write(data);
  });

  build.stderr.on('data', function(data) {
    process.stderr.write(data);
  });

  build.on('exit', function(code) {
    if (code === 0) {
      dfd.resolve();
    } else {
      dfd.reject();
    }
  });

  return dfd.promise;
};
