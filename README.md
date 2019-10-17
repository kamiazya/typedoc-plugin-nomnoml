[![](https://github.com/kamiazya/typedoc-plugin-nomnoml/workflows/Node%20CI/badge.svg)](https://github.com/kamiazya/typedoc-plugin-nomnoml/actions?workflow=Node+CI) [![npm version](https://badge.fury.io/js/typedoc-plugin-nomnoml.svg)](https://badge.fury.io/js/typedoc-plugin-nomnoml) [![Maintainability](https://api.codeclimate.com/v1/badges/330fef9d4d98238e09c1/maintainability)](https://codeclimate.com/github/kamiazya/typedoc-plugin-nomnoml/maintainability) [![BCH compliance](https://bettercodehub.com/edge/badge/kamiazya/typedoc-plugin-nomnoml?branch=master)](https://bettercodehub.com/) [![CodeFactor](https://www.codefactor.io/repository/github/kamiazya/typedoc-plugin-nomnoml/badge)](https://www.codefactor.io/repository/github/kamiazya/typedoc-plugin-nomnoml) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

# typedoc-plugin-nomnoml

A plugin for TypeDoc that generates graphs for nomnoml diagrams by @nomnoml annotation.

## Installation

The plugin can then be installed using [npm](https://www.npmjs.com/):

[![NPM](https://nodei.co/npm/typedoc-plugin-nomnoml.png)](https://nodei.co/npm/typedoc-plugin-nomnoml/)

### npm

```bash
npm install --save-dev typedoc-plugin-nomnoml
```

### yarn

```bash
yarn add -D typedoc-plugin-nomnoml
```

## Usage

Write tsdoc with `@nomnoml` annotation

```typescript
/**
 * Hoge is sample class for example of `typedoc-plugin-nomnoml`.
 *
 * @nomnoml Alice greet to Jone
 * [Pirate|eyeCount: Int|raid();pillage()|
 *   [beard]--[parrot]
 *   [beard]-:>[foul mouth]
 * ]
 *
 * [<abstract>Marauder]<:--[Pirate]
 * [Pirate]- 0..7[mischief]
 * [jollyness]->[Pirate]
 * [jollyness]->[rum]
 * [jollyness]->[singing]
 * [Pirate]-> *[rum|tastiness: Int|swig()]
 * [Pirate]->[singing]
 * [singing]<->[rum]
 *
 * [<start>st]->[<state>plunder]
 * [plunder]->[<choice>more loot]
 * [more loot]->[st]
 * [more loot] no ->[<end>e]
 *
 * [<actor>Sailor] - [<usecase>shiver me;timbers]
 */
export class Hoge { }
```

## Additional Options

### Example: If you want to use `nomnoml@0.6.1`

#### Set version by CLI

Add `--nomnomlVersion 0.6.1` option.

```bash
typedoc --plugin typedoc-plugin-nomnoml --nomnomlVersion 0.6.1
```

#### Set version by `typedoc.json`

Add `nomnomlVersion` config to `typedoc.json`.

```json
{
  "mode": "file",
  "out": "./docs",
  "nomnomlVersion": "0.6.1"
}
```

### Help

```bash
$ typedoc --plugin typedoc-plugin-nomnoml -h
Loaded plugin typedoc-plugin-nomnoml
Usage:
 typedoc --mode modules --out path/to/documentation path/to/sourcefiles

TypeDoc options:
 ...
 -h, --help                Print this message.
 ...
 --nomnomlVersion          Nomnoml Plugin: Version of nomnoml.
 ...

TypeScript options:
See https://www.typescriptlang.org/docs/handbook/compiler-options.html
```

## License

This software is released under the MIT License, see LICENSE.

## Author

[kamiazya(Yuki Yamazaki)](https://github.com/kamiazya)

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/W7W5VDNO)
