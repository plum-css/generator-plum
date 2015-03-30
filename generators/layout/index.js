'use strict';

var yeoman = require('yeoman-generator');
var base   = require('../base');
var _      = require('lodash');

module.exports = yeoman.generators.Base.extend(_.extend(base.generator,{

  type: 'layout',

  location: 'layouts',

  stylesheets: ['layout'],

  templates: ['template'],

  configuring: function () {
    this.stylesheetPaths = this.stylesheets.map(function(file) {
      return {
        dest: this.location + '/' + this.name + '/_' + this.name + '.scss',
        src: '_' + file + '.scss'
      };
    }.bind(this));

    this.templatePaths = this.templates.map(function(file) {
      return {
        dest: this.location + '/' + this.name + '/templates/example.hbs',
        src: 'templates/_' + file + '.hbs'
      };
    }.bind(this));

    this.importPaths = this.stylesheets.map(function(file) {
      return '../' + this.location + '/' + this.name + '/' + file;
    }.bind(this));

    this.filePaths = this.stylesheetPaths.concat(this.templatePaths);
  }
}));
