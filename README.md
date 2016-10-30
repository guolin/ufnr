ufnr -- use fastest NPM registry

===

[![NPM version][npm-image]][npm-url]

`ufnr` means to 'use fastest NPM registry'. It test the speed of every registries and switch to the fastest one, now it include `npm`, `taobao`, `nj(nodejitsu)`, `rednpm`.

## Install
```
$ npm install -g ufnr
```

## Example
```
$ ufnr
set registry to https://registry.npm.taobao.org/
current registry is  https://registry.npm.taobao.org/

```

## Registries

* [npm](https://www.npmjs.org)
* [nodejitsu](https://www.nodejitsu.com)
* [taobao](http://npm.taobao.org/)
* [rednpm](http://npm.mirror.cqupt.edu.cn)


## Notice

When you use an other registry, you can not use the `publish` command. 


## LICENSE
MIT

[npm-image]: https://img.shields.io/npm/v/ufnr.svg?style=flat-square
[npm-url]: https://npmjs.org/package/ufnr