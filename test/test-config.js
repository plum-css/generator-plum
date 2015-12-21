'use strict';

var fs      = require('fs');
var path    = require('path');
var assert  = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('Plum:config', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/config'))
      .inDir(path.join( __dirname, './tmp'), function (dir) {
        fs.writeFileSync('.yo-rc.json', '{}');
      })
      .withArguments(['default'])
      .withOptions({'skip-import': true, 'force': true})
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'configs/default/_index.scss',
      'configs/default/partials/_colors.scss',
      'configs/default/partials/_icons.scss',
      'configs/default/partials/_images.scss',
      'configs/default/partials/_layouts.scss',
      'configs/default/partials/_typography.scss'
    ]);
  });
});
