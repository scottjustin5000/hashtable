[![Build Status](https://travis-ci.org/scottjustin5000/hashtable.svg?branch=master)](https://travis-ci.org/scottjustin5000/hashtable) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# Simple Hashtable 
which uses linked-list on collisions.


### Tests
```sh
npm test
```


### Usage
These services can be used to reply previous games.  To do so, an event will have to be set up in cloud watch to call the ``interval-lambda-dispatcher`` lambda.  
This event should be configured with the following options:
```js
let hashTable = new HashTable()
hashTable.add('key', {'prop': 123})
hashTable.put('key', {'prop':456, 'another': 'value'})
hashTable.get('key') // {'prop':456, 'another': 'value'}
hashTable.remove('key')
hashTable.get('key') //not found

```

