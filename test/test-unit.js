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
      'units/default/_default.scss',
      'units/default/tests/fixtures/default.hbs',
      'units/default/tests/default.js'
    ]);
  });
});
