'use strict';

var fs      = require('fs');
var path    = require('path');
var assert  = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('Plum:export', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/export'))
      .inDir(path.join( __dirname, './tmp'), function (dir) {
        fs.writeFileSync('.yo-rc.json', '{}');
      })
      .withArguments(['default'])
      .withOptions({'force': true})
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'exports/default.scss'
    ]);
  });
});
