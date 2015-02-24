'use strict';

var yeoman = require('yeoman-generator');
var base   = require('../base');
var _      = require('lodash');

module.exports = yeoman.generators.Base.extend(_.extend(base.generator,{

  type: 'function',

  location: 'functions',

  files: ['function'],

  configuring: function () {
    this.filePaths = this.files.map(function(file) {
      return {
        dest: 'helpers/' + this.location + '/_' + this.name + '.scss',
        src: '_' + file + '.scss'
      };
    }.bind(this));

    this.importPaths = this.files.map(function(file) {
      return '../helpers/' + this.location + '/' + this.name;
    }.bind(this));
  }
}));
