'use strict';

var yeoman  = require('yeoman-generator');
var chalk   = require('chalk');

module.exports = yeoman.generators.Base.extend({

  writing: {
    app: function () {
      this.fs.copy(this.templatePath('_yo-rc.json'), this.destinationPath('.yo-rc.json'));
      this.log(chalk.green('Plum application initialized in ' + process.cwd() + '.'));
    }
  },

  install: function () {
    this.composeWith('plum:export', {args: ['default']});
  }

});
