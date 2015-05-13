'use strict';

var imports = require('../../utils/imports.js');
var prompts = require('../../utils/prompts.js');

module.exports = {

  generator: {

    initializing: function () {
      if (!this.fs.exists(this.destinationPath('.yo-rc.json'))) {
        this.log(new Error('The generator should be run inside of your root css directory.'));
        process.exit(1);
      }

      this.argument('name', {
        required: false,
        type: String
      });

      this.option('skip-import');
    },

    prompting: function () {
      var done = this.async();

      if (!this.options['skip-import'] && !this.name) {
        prompts.askName.apply(this, [this.type, function(answer) {
          this.name = answer;

          prompts.listExports.call(this, function(answer) {
            this.export = answer;
            done();
          }.bind(this));
        }.bind(this)]);
      }

      if (this.options['skip-import'] && !this.name) {
        prompts.askName.apply(this, [this.type, function(answer) {
          this.name = answer;
          done();
        }.bind(this)]);
      }

      if (!this.options['skip-import'] && this.name) {
        prompts.listExports.call(this, function(answer) {
          this.export = answer;
          done();
        }.bind(this));
      }

      if (this.options['skip-import'] && this.name) {
        done();
      }
    },

    writing: function () {
      this.filePaths.forEach(function(path) {
        this.fs.copyTpl(this.templatePath(path.src), this.destinationPath(path.dest), {
          name: this.name,
          type: this.type,
          location: this.location

        });
      }.bind(this));
    },

    install: function () {
      if (!this.options['skip-import']) {
        imports(this.destinationPath(this.export)).add(this.location, this.importPaths, function () {
          this.log('Imported the ' + this.name + ' into ' + this.export);
        }.bind(this));
      }
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
  }
};
