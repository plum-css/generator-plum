// 'use strict';
//
// var path = require('path');
// var assert = require('yeoman-generator').assert;
// var helpers = require('yeoman-generator').test;
//
// describe('Plum:vendor', function () {
//   before(function (done) {
//     helpers.run(path.join(__dirname, '../vendor'))
//       .withArguments('default', '--force')
//       .on('end', done);
//   });
//
//   it('creates files', function () {
//     assert.file([
//       'vendors/_default.scss'
//     ]);
//   });
// });
'use strict';

var fs      = require('fs');
var path    = require('path');
var assert  = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('Plum:vendor', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/vendor'))
      .inDir(path.join( __dirname, './tmp'), function (dir) {
        fs.writeFileSync('.yo-rc.json', '{}');
      })
      .withArguments(['default'])
      .withOptions({'skip-import': true, 'force': true})
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'vendors/_default.scss'
    ]);
  });
});
