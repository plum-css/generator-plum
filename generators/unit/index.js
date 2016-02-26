'use strict';

var yeoman = require('yeoman-generator');
var base   = require('../base');
var _      = require('lodash');

module.exports = yeoman.generators.Base.extend(_.extend(base.generator,{

  type: 'unit',

  location: 'units',

  stylesheets: ['index'],

  templates: ['template'],

  configs: ['colors', 'icons', 'images', 'layouts', 'typography'],

  tests: ['test'],

  configuring: function () {
    this.stylesheetPaths = this.stylesheets.map(function(file) {
      return {
        dest: this.location + '/' + this.name + '/_' + file + '.scss',
        src: '_' + file + '.scss'
      };
    }.bind(this));

    this.templatePaths = this.templates.map(function(file) {
      return {
        dest: this.location + '/' + this.name + '/tests/fixtures/' + this.name + '.hbs',
        src: 'tests/fixtures/_' + file + '.hbs'
      };
    }.bind(this));

    this.configPaths = this.configs.map(function(file) {
      return {
        dest: this.location + '/' + this.name + '/config/_' + file + '.scss',
        src: '../../config/templates/_' + file + '.scss'
      };
    }.bind(this));

    this.testPaths = this.tests.map(function(file) {
      return {
        dest: this.location + '/' + this.name + '/tests/' + this.name + '.js',
        src: 'tests/_' + file + '.js'
      };
    }.bind(this));

    this.importPaths = this.stylesheets.map(function(file) {
      return '../' + this.location + '/' + this.name + '/' + file;
    }.bind(this));

    this.filePaths = this.stylesheetPaths.concat(this.templatePaths, this.testPaths, this.configPaths);
  }
}));
