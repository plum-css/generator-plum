'use strict';

var yeoman = require('yeoman-generator');
var base   = require('../base');
var _      = require('lodash');

module.exports = yeoman.generators.Base.extend(_.extend(base.generator,{

  type: 'unit',

  location: 'units',

  files: ['unit'],

  configuring: function () {
    this.filePaths = this.files.map(function(file) {
      return {
        dest: this.location + '/_' + this.name + '.scss',
        src: '_' + file + '.scss'
      };
    }.bind(this));

    this.importPaths = this.files.map(function(file) {
      return '../' + this.location + '/' + this.name;
    }.bind(this));
  }
}));
