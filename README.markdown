### grunt-vuecc
> :boar: Grunt task for unofficial [Vue component compiler](https://github.com/stpettersens/vue-component-compiler).

[![Build Status](https://travis-ci.org/stpettersens/grunt-vuecc.png?branch=master)](https://travis-ci.org/stpettersens/grunt-vuecc)
[![npm version](https://badge.fury.io/js/grunt-vuecc.svg)](http://npmjs.com/package/gulp-vuecc)
[![Dependency Status](https://david-dm.org/stpettersens/grunt-vuecc.png?theme=shields.io)](https://david-dm.org/stpettersens/grunt-vuecc) [![Development Dependency Status](https://david-dm.org/stpettersens/grunt-vuecc/dev-status.png?theme=shields.io)](https://david-dm.org/stpettersens/grunt-vuecc#info=devDependencies)
##### Install:

First install [vuecc](https://github.com/stpettersens/vue-component-compiler) globally:

    $ npm install -g vuecc-compiler

Then:

    $ npm install --save-dev grunt-vuecc

##### Usage:
```js
module.exports = function(grunt) {
	grunt.initConfig({
		vuecc: {
			components: {
				options: {
					src: '*.vue.ts',
					header: true,
					verbose: false,
					inputExt: '.vue.ts',
					outputExt: '.js'
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-vuecc');
	grunt.registerTask('default', ['vuecc']);
};
            
```
##### Options:

* **options: Object** : Object containing the following options:
  * **src: string** : File path or file path with wildcard(s) (Mandatory option).
  * **header: boolean** : Generate commented header for output (default: *true*).
  * **references: string[]**: Array of TypeScript reference path includes (default: []). 
  * **verbose: boolean** : Display console output for invocation (default: *false*).
  * **inputExt: string** : File extension to use for input (default: *.vue.ts*).
  * **outputExt: string** : File extension to use for output (default: *.ts*).

##### Authors:

* [Sam Saint-Pettersen](https://github.com/stpettersens)

##### License:

[MIT](https://opensource.org/licenses/MIT)

##### Using Gulp?

:tropical_drink: [gulp-vuecc](http://github.com/stpettersens/gulp-vuecc)
