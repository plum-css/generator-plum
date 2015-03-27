'use strict';

var yeoman  = require('yeoman-generator');
var prompts = require('../../utils/prompts.js');

module.exports = yeoman.generators.Base.extend({

  type: 'export',

  location: 'exports',

  stylesheets: ['export'],

  initializing: function () {
    this.argument('name', {
      required: false,
      type: String
    });
  },

  prompting: function () {
    if (!this.name) {
      prompts.askName.apply(this, [this.type, function(answer) {
        this.name = answer;
        done();
      }.bind(this)]);
    }
  },

  configuring: function () {
    this.filePaths = this.stylesheets.map(function(file) {
      return {
        dest: this.location + '/' + this.name + '.scss',
        src: '_' + file + '.scss'
      };
    }.bind(this));
  },

  writing: function () {
    this.filePaths.forEach(function(path) {
      this.fs.copy(this.templatePath(path.src), this.destinationPath(path.dest));
    }.bind(this));
  },

  end: function () {
    var done = this.async();

    prompts.runGenerator.call(this, function(answer) {
      if(answer) {
        prompts.listGenerators.call(this, function(answer) {
          this.composeWith('plum:' + answer);
          done();
        }.bind(this));
      } else {
        done();
      }
    }.bind(this));
  }
});
