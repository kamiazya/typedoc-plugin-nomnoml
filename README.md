[![GitHub Action](https://github.com/kamiazya/typedoc-plugin-nomnoml/workflows/Node%20CI/badge.svg)](https://github.com/kamiazya/typedoc-plugin-nomnoml/actions?workflow=Node+CI) [![npm version](https://badge.fury.io/js/typedoc-plugin-nomnoml.svg)](https://badge.fury.io/js/typedoc-plugin-nomnoml) [![Maintainability](https://api.codeclimate.com/v1/badges/330fef9d4d98238e09c1/maintainability)](https://codeclimate.com/github/kamiazya/typedoc-plugin-nomnoml/maintainability) [![BCH compliance](https://bettercodehub.com/edge/badge/kamiazya/typedoc-plugin-nomnoml?branch=master)](https://bettercodehub.com/) [![CodeFactor](https://www.codefactor.io/repository/github/kamiazya/typedoc-plugin-nomnoml/badge)](https://www.codefactor.io/repository/github/kamiazya/typedoc-plugin-nomnoml) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier) <!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

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

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://blog.kamiazya.tech/"><img src="https://avatars0.githubusercontent.com/u/35218186?v=4" width="100px;" alt=""/><br /><sub><b>Yuki Yamazaki</b></sub></a><br /><a href="https://github.com/kamiazya/typedoc-plugin-nomnoml/commits?author=kamiazya" title="Code">💻</a> <a href="https://github.com/kamiazya/typedoc-plugin-nomnoml/commits?author=kamiazya" title="Tests">⚠️</a> <a href="https://github.com/kamiazya/typedoc-plugin-nomnoml/commits?author=kamiazya" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/baronTommy"><img src="https://avatars2.githubusercontent.com/u/16768208?v=4" width="100px;" alt=""/><br /><sub><b>Tommy</b></sub></a><br /><a href="#ideas-baronTommy" title="Ideas, Planning, & Feedback">🤔</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors)
specification. Contributions of any kind welcome!

## License

This software is released under the MIT License, see [LICENSE](./LICENSE).
