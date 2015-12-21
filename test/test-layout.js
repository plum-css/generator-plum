'use strict';

var fs      = require('fs');
var path    = require('path');
var assert  = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('Plum:layout', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/layout'))
      .inDir(path.join( __dirname, './tmp'), function (dir) {
        fs.writeFileSync('.yo-rc.json', '{}');
      })
      .withArguments(['default'])
      .withOptions({'skip-import': true, 'force': true})
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'layouts/default/_index.scss',
      'layouts/default/tests/fixtures/default.hbs',
      'layouts/default/tests/default.js'
    ]);
  });
});
