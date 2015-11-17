/*
 * grunt-vuecc
 * https://github.com/stpettersens/grunt-vuecc
 *
 * Copyright (c) 2015 Sam Saint-Pettersen
 * Licensed under the MIT license.
 */

'use strict';

var glob = require('glob');

module.exports = function(grunt) {

  grunt.registerMultiTask('vuecc', 'Grunk task for unoffical Vue component compiler', function() {

    var options = this.options({
      src: null,
      verbose: true,
      header: true,
      references: [],
      inputExt: '.vue.ts',
      outputExt: '.ts'
    });

    function invokeVuecc(done, input, output, opts) {
       opts.unshift(input, output);
       //grunt.log.warn(opts);
       grunt.util.spawn({
          cmd: 'vuecc',
          args: opts
        }, 
        function(err, res, code) {
          if(res.stdout && opts.indexOf('--quiet') == -1) {
            grunt.log.writeln(res.stdout);
          }
          if(res.stderr) {
            grunt.log.warn(res.stderr);
          }
          done();
        });
    }

    if(!options.hasOwnProperty('src') || options.src === null || options.src === '') {
        grunt.fail.fatal('Source file(s) must be defined.');
    }

    var files = glob.sync(options.src);

    var iExt = options.src.substr(-7);
    var oExt = options.src.substr(-3);
    var opts = [];

    if(options.hasOwnProperty('inputExt')) {
        iExt = options.inputExt;
    }

    if(options.hasOwnProperty('outputExt')) {
        oExt = options.outputExt;
    }

    if(options.hasOwnProperty('verbose') && !options.verbose) {
      opts.push('--quiet');
    }

    if(options.hasOwnProperty('header') && !options.header) {
      opts.push('--no-header');
    }

    if(options.hasOwnProperty('references') && Array.isArray(options.references)) {
      var o = '[';
      for(var i = 0; i < options.references.length; i++) {
          o += "'" + options.references[i] + "'";
          if(i < options.references.length - 1) {
          o += ',';
        }
      }
      o += ']';
      opts.push(o);
    }

    var done = this.async();
    var count = 0;
    files.map(function(file) {
        var output = file.substr(0, file.length - iExt.length) + oExt;
        invokeVuecc(done, file, output, opts);
        count++;
    }); 
    if(!options.verbose) {
        var f = ' file';
        if(count > 1) f += 's';
        grunt.log.ok(count + f + ' created.');  
    }
  });
};
