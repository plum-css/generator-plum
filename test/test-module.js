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
      'modules/default/_index.scss',
      'modules/default/partials/_base.scss',
      'modules/default/partials/_layout.scss',
      'modules/default/partials/_modifier.scss',
      'modules/default/partials/_state.scss',
      'modules/default/partials/_theme.scss',
      'modules/default/tests/fixtures/default.hbs',
      'modules/default/tests/default.js'
    ]);
  });
});
