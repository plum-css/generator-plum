'use strict';

var yeoman = require('yeoman-generator');
var base   = require('../base');
var _      = require('lodash');

module.exports = yeoman.generators.Base.extend(_.extend(base.generator,{

  type: 'config',

  location: 'configs',

  index: ['index'],

  partials: ['colors', 'icons', 'images', 'layouts', 'typography'],

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

    this.filePaths = this.partialsPath.concat( this.indexPath );

    this.importPaths = this.index.map(function(file) {
      return '../' + this.location + '/' + this.name + '/' + file;
    }.bind(this));
  }
}));
