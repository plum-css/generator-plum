'use strict';

var fs      = require('fs');
var path    = require('path');
var assert  = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('Plum:unit', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/unit'))
      .inDir(path.join( __dirname, './tmp'), function (dir) {
        fs.writeFileSync('.yo-rc.json', '{}');
      })
      .withArguments(['default'])
      .withOptions({'skip-import': true, 'force': true})
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'units/default/_index.scss',
      'units/default/config/_colors.scss',
      'units/default/config/_icons.scss',
      'units/default/config/_images.scss',
      'units/default/config/_layouts.scss',
      'units/default/config/_typography.scss',
      'units/default/tests/fixtures/default.hbs',
      'units/default/tests/default.js'
    ]);
  });
});
