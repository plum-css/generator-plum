'use strict';

var yeoman = require('yeoman-generator');
var base   = require('../base');
var _      = require('lodash');

module.exports = yeoman.generators.Base.extend(_.extend(base.generator,{

  type: 'config',

  location: 'configs',

  stylesheets: ['colors', 'icons', 'images', 'layouts', 'typography'],

  configuring: function () {
    this.filePaths = this.stylesheets.map(function(file) {
      return {
        dest: this.location + '/' + this.name + '/_' + file + '.scss',
        src: '_' + file + '.scss'
      };
    }.bind(this));

    this.importPaths = this.stylesheets.map(function(file) {
      return '../' + this.location + '/' + this.name + '/' + file;
    }.bind(this));
  }
}));
