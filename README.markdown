### grunt-vuecc
> :boar: Grunt task for unofficial [Vue component compiler](https://github.com/stpettersens/vue-component-compiler).

<!--
[![Build Status](https://travis-ci.org/stpettersens/gulp-codo.png?branch=master)](https://travis-ci.org/stpettersens/gulp-codo)
[![npm version](https://badge.fury.io/js/gulp-codo.svg)](http://npmjs.com/package/gulp-codo)
[![Dependency Status](https://david-dm.org/stpettersens/gulp-codo.png?theme=shields.io)](https://david-dm.org/stpettersens/gulp-codo) [![Development Dependency Status](https://david-dm.org/stpettersens/gulp-codo/dev-status.png?theme=shields.io)](https://david-dm.org/stpettersens/gulp-codo#info=devDependencies)
-->

##### Install:

First install [vuecc](https://github.com/stpettersens/vue-component-compiler) globally:

    $ npm install -g vue-component-compiler

Then:

    $ npm install --save-dev grunt-vuecc

##### Usage:
```js
module.exports = function(grunt) {
	grunt.initConfig({
		vuecc: {
			controllers: {
				options: {
					src: 'clientside/controllers/*.vue.ts',
					header: true,
					verbose: false,
					inputExt: '.vue.ts',
					outputExt: '.ctrl.js'
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-vuecc');
	grunt.registerTask('default', ['vuecc']);
};
            
```

##### Authors

* [Sam Saint-Pettersen](https://github.com/stpettersens)

##### License

[MIT](https://opensource.org/licenses/MIT)
