const TypedError = require('error/typed')

const HashItem = require('./hash-item')
const hash = require('./hash')
const matchItem = require('./match-item')
const removeNode = require('./remove-node')

const NotFoundError = TypedError({
  type: 'hashtable.error',
  message: '{key} not found, status={statusCode}',
  key: null,
  statusCode: 404
})

class HashTable {
  constructor () {
    this.table = {}
    this.seed = 890676
  }

  get (key) {
    const hashId = hash(key)
    let item = this.table[hashId]
    if (!item) throw NotFoundError({key: key})
    if (!item.next) return item
    let currentItem = matchItem(item, key)
    if (!currentItem) throw NotFoundError({key: key})
    return currentItem.value
  }

  put (key, item) {
    const hashId = hash(item.key)
    let hashItem = this.table[hashId]
    if (!hashItem) throw NotFoundError({key: item.key})
    let currentItem = matchItem(hashItem, item.key)
    if (!currentItem) throw NotFoundError({key: item.key})

    currentItem.value = item
  }

  add (key, item) {
    const hashId = hash(key)
    if (!this.table[hashId]) {
      this.table[hashId] = new HashItem(key, item)
      return
    }

    let currentItem = this.table[hashId]

    while (currentItem.next) {
      currentItem = currentItem.next
    }

    if (!currentItem.next) {
      currentItem.next = new HashItem(item.key, item)
    }
  }

  remove (key) {
    const hashId = hash(key)
    if (!this.table[hashId]) throw NotFoundError({key: key})

    const currentItem = this.table[hashId]

    // there have been no collisions and we can remove
    if (!currentItem.next) {
      delete this.table[hashId]
      return
    }
    // there were collisions so we need to do a linked list delete
    const newNode = removeNode(currentItem, key)
    this.table[hashId] = newNode
  }
}
module.exports = HashTable
