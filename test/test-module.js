'use strict';

var fs      = require('fs');
var path    = require('path');
var assert  = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('Plum:module', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/module'))
      .inDir(path.join( __dirname, './tmp'), function (dir) {
        fs.writeFileSync('.yo-rc.json', '{}');
      })
      .withArguments(['default'])
      .withOptions({'skip-import': true, 'force': true})
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'modules/default/_base.scss',
      'modules/default/_layout.scss',
      'modules/default/_modifier.scss',
      'modules/default/_state.scss',
      'modules/default/_theme.scss',
      'modules/default/templates/example.hbs'
    ]);
  });
});
