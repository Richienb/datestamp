# Datestamp [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/datestamp/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/datestamp)

Convert a Unix timestamp to a Date object.

[![NPM Badge](https://nodei.co/npm/datestamp.png)](https://npmjs.com/package/datestamp)

## Install

```sh
npm install datestamp
```

## Usage

```js
const datestamp = require("datestamp");

datestamp(1576282111);
//=> 2019-12-14T00:08:31.000Z
```

## API

### datestamp(timestamp)

#### timestamp

Type: `number`

The Unix timestamp to convert.
