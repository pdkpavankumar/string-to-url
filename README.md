# string-to-url

[![Build Status](https://travis-ci.com/pdkpavankumar/string-to-url.svg?branch=master)](https://travis-ci.org/pdkpavankumar/string-to-urlt) [![dependencies Status](https://david-dm.org/pdkpavankumar/string-to-url/status.svg)](https://david-dm.org/pdkpavankumar/string-to-url) [![devDependencies Status](https://david-dm.org/pdkpavankumar/string-to-url/dev-status.svg)](https://david-dm.org/pdkpavankumar/string-to-url?type=dev) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Installation

Install `string-to-url` into to your project via `npm`:

```shell
$ npm install string-to-url --save-dev
```

## Usage

getUrls -- will give the array of urls present in the string

getHTMLText -- return HTML text converting all links to anchor tags. 
                Pass options object with all required properties if needed ex: target, title. e.t.c {target: '__blank'}

example1
```js
//somePage.js
import { getUrls } from 'string-to-url';

console.log(getUrls('abc www.google.com www.apple.com');
```

output:

```sh
["http://www.google.com", "mailto:gmail@gmail.com"]
```
----
example2
```js
//somePage.js
import { getHTMLText } from 'string-to-url';

console.log(getHTMLText('abc www.google.com');
```

output:

```sh
abc <a href="http://www.google.com">www.google.com</a>
```
----
example3
```js
//somePage.js
import { getHTMLText } from 'string-to-url';

console.log(getHTMLText('abc www.google.com', { target: '__blank' });
```

output:

```sh
abc <a target="__blank" href="http://www.google.com">www.google.com</a>
```
----
