'use strict';

var yeoman = require('yeoman-generator');
var base   = require('../base');
var _      = require('lodash');

module.exports = yeoman.generators.Base.extend(_.extend(base.generator,{

  type: 'module',

  location: 'modules',

  index: ['config', 'index'],

  partials: ['base', 'layout', 'modifier', 'state', 'theme'],

  templates: ['template'],

  tests: ['test'],

  configuring: function () {

    this.indexPath = this.index.map(function(file){
      return {
        dest: this.location + '/' + this.name + '/_' + file + '.scss',
        src: '_' + file + '.scss'
      }
    }.bind(this));

    this.partialsPath = this.partials.map(function(file){
      return {
        dest: this.location + '/' + this.name + '/partials/_' + file + '.scss',
        src: '_' + file + '.scss'
      }
    }.bind(this));

    this.templatePaths = this.templates.map(function(file) {
      return {
        dest: this.location + '/' + this.name + '/tests/fixtures/' + this.name + '.hbs',
        src: 'tests/fixtures/_' + file + '.hbs'
      };
    }.bind(this));

    this.testPaths = this.tests.map(function(file) {
      return {
        dest: this.location + '/' + this.name + '/tests/' + this.name + '.js',
        src: 'tests/_' + file + '.js'
      };
    }.bind(this));

    this.importPaths = this.index.map(function(file) {
      return '../' + this.location + '/' + this.name + '/' + file;
    }.bind(this));

    this.filePaths = this.partialsPath.concat(this.indexPath, this.templatePaths, this.testPaths);
  }
}));
