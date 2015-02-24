# Plum generator [![Build Status](https://travis-ci.org/plum-css/generator-plum.png?branch=master)](https://travis-ci.org/plum-css/generator-plum)

> [Yeoman](http:/yeoman.io) generator for [plum](http://plum-css.github.io/plum/).

## Getting Started

- Install with [NPM](https://www.npmjs.org/) - `npm install -g generator-plum`

## Usage

1. Run `yo plum` at the root of your css directory to initialize a new [plum](http://plum-css.github.io/plum/) application.
2. Run any of the [available generators](#generators) inside of your css directory.

## Generators

Available generators:

- [plum](#app) ([plum:app](#app))
- [plum:config <name>](#config)
- [plum:core <name>](#core)
- [plum:function <name>](#function)
- [plum:mixin <name>](#mixin)
- [plum:layout <name>](#layout)
- [plum:vendor <name>](#vendor)
- [plum:module <name>](#module)
- [plum:unit <name>](#unit)
- [plum:page <name>](#page)
- [plum:hotfix <name>](#hotfix)
- [plum:export <name>](#export)


### App
Initializes a new [plum](http://plum-css.github.io/plum/) application.

`yo plum`

### Config
Generates a [config](http://plum-css.github.io/plum/docs/config.html) files in `configs/<name>` and prompts to update an exports file.

`yo plum:config <name>`

### Core
Generates [core](http://plum-css.github.io/plum/docs/core.html) files in `core/` and prompts to update an exports file.

`yo plum:core <name>`

### Function
Generates [function](http://plum-css.github.io/plum/docs/helpers.html) files in `helpers/functions/<name>` and prompts to update an exports file.

`yo plum:function <name>`

### Mixin
Generates [mixin](http://plum-css.github.io/plum/docs/helpers.html) files in `helpers/mixins/<name>` and prompts to update an exports file.

`yo plum:mixin <name>`

### Layout
Generates [layout](http://plum-css.github.io/plum/docs/layouts.html) files in `layouts/<name>` and prompts to update an exports file.

`yo plum:layout <name>`

### Vendor
Generates [vendor](http://plum-css.github.io/plum/docs/vendors.html) files in `vendors/<name>` and prompts to update an exports file.

`yo plum:vendor <name>`

### Module
Generates [module](http://plum-css.github.io/plum/docs/modules.html) files in `modules/<name>/` and prompts to update an exports file.

`yo plum:module <name>`

### Unit
Generates [unit](http://plum-css.github.io/plum/docs/units.html) files in `units/<name>` and prompts to update an exports file.

`yo plum:unit <name>`

### Page
Generates [page](http://plum-css.github.io/plum/docs/pages.html) files in `pages/<name>` and prompts to update an exports file.

`yo plum:page <name>`

### Hotfix
Generates [hotfix](http://plum-css.github.io/plum/docs/hotfixes.html) files in `hotfixes/<name>` and prompts to update an exports file.

`yo plum:hotfix <name>`

### Export
Generates [export](http://plum-css.github.io/plum/docs/exports.html) files in `exports/<name>`

`yo plum:export <name>`


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality.

## License
Copyright (c) 2015 [Jason Bellamy ](http://jasonbellamy.com)    
Licensed under the MIT license.
