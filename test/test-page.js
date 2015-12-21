'use strict';

var fs      = require('fs');
var path    = require('path');
var assert  = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('Plum:page', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/page'))
      .inDir(path.join( __dirname, './tmp'), function (dir) {
        fs.writeFileSync('.yo-rc.json', '{}');
      })
      .withArguments(['default'])
      .withOptions({'skip-import': true, 'force': true})
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'pages/default/_index.scss',
      'pages/default/tests/fixtures/default.hbs',
      'pages/default/tests/default.js'
    ]);
  });
});
