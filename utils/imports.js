'use strict';

var lineder  = require( "lineder" );
var linesert = require( "linesert" );


var imports = function(path) {

  var types = {
    "configs"   : "<-configs->",
    "core"      : "<-core->",
    "functions" : "<-functions->",
    "mixins"    : "<-mixins->",
    "layouts"   : "<-layouts->",
    "vendors"   : "<-vendors->",
    "modules"   : "<-modules->",
    "units"     : "<-units->",
    "pages"     : "<-pages->",
    "hotfixes"  : "<-hotfixes->"
  };

  var convert = function(paths) {
    return paths.map(function(path) {
      return '@import "' + path + '";';
    });
  };

  return {

    add: function(location, paths, cb) {
      lineder(path).find(types[location], function(err, results) {
        linesert(path).afterLine(results[0].line).insert(convert(paths), cb);
      });
    }
  };
};

module.exports = imports;
