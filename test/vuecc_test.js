'use strict';

var grunt = require('grunt');

exports.vuecc = {

  components: function(test) {
    test.expect(1);

    var actual = grunt.file.read('greeter.ts');
    var expected = grunt.file.read('test/expected.ts');
    test.equal(actual, expected, 'should have created greeter.ts from greeter.vue.ts.');

    test.done();
  }
};
