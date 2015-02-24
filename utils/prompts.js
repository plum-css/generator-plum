'use strict';

var fs   = require('fs');
var path = require('path');

var prompts = {

  runGenerator: function(cb) {
    this.prompt({
      type    : 'list',
      name    : 'run',
      message : 'Would you like to run another generator?',
      choices : [{name: 'Yes', value: true}, {name: 'No', value: false}]
    },function(answer) {
      cb(answer.run);
    });
  },

  listGenerators: function(cb) {
    this.prompt({
      type    : 'list',
      name    : 'generator',
      message : 'Which generator would you like to run?',
      choices : ['config', 'core', 'export', 'function', 'hotfix', 'layout', 'mixin', 'module', 'page', 'unit', 'vendor']
    }, function(answer) {
      cb(answer.generator);
    });
  },

  listExports: function(cb) {
    fs.readdir('exports', function(err, files) {
      if (!files) {
        this.log(new Error('Could not find an exports file. Please create one and run the generator again.'));
        process.exit(1);
      }

      this.prompt({
        type    : 'list',
        name    : 'export',
        message : 'Which exports file would you like to use?',
        choices : files.map(function(file) { return path.join('exports', file) })
      }, function(answer) {
        cb(answer.export);
      });
    }.bind(this));
  },

  askName: function(type, cb) {
    this.prompt({
      type    : 'question',
      name    : 'name',
      message : 'What would you like to name this ' + type + '?',
    }, function(answer) {
      cb(answer.name);
    });
  }
}

module.exports = prompts;
