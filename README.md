[![Build Status](https://travis-ci.org/scottjustin5000/hashtable.svg?branch=master)](https://travis-ci.org/scottjustin5000/hashtable) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# Simple Hashtable 
which uses linked-list on collisions.


### Tests
```sh
npm test
```


### Usage
```js
let hashTable = new HashTable()
hashTable.add('key', {'prop': 123})
hashTable.put('key', {'prop':456, 'another': 'value'})
hashTable.get('key') // {'prop':456, 'another': 'value'}
hashTable.remove('key')
hashTable.get('key') //not found

```

