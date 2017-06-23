const HashTable = require('../table')
const HashItem = require('../hash-item')
describe('test hash table', () => {
  const hashTable = new HashTable()
  it('should add', () => {
    hashTable.add('something', {'key': 'something', 'foo': 'bar', 'some': 'thing'})
    Object.keys(hashTable.table).length.should.equal(1)
  })
  it('should get', () => {
    const val = hashTable.get('something')
    val.key.should.equal('something')
  })
  it('should put', () => {
    hashTable.put('something', {'key': 'something', 'foo': 'bar123', 'some': 'thing'})
    const val = hashTable.get('something')
    val.value.foo.should.equal('bar123')
  })
  it('should remove', () => {
    hashTable.remove('something')
    Object.keys(hashTable.table).length.should.equal(0)
  })
})

describe('test hash table collision', () => {
  it('should add', () => {
    const hashTable = new HashTable()
    hashTable.table['1034423296'] = new HashItem('blah_blah', { key: 'blah_blah', foo: 'bar123', some: 'thing' })
    hashTable.add('something', {'key': 'something', 'foo': 'bar', 'some': 'thing'})
    Object.keys(hashTable.table).length.should.equal(1)
    const item = hashTable.table['1034423296']
    item.should.have.property('next')
    const next = item.next
    next.should.have.property('key', 'something')
  })
  it('should get', () => {
    const hashTable = new HashTable()
    hashTable.table['1034423296'] = new HashItem('something', {key: 'something', 'foo': 'bar', 'some': 'thing'})
    hashTable.table['1034423296'].next = new HashItem('blah_blah', { key: 'blah_blah', foo: 'bar123', some: 'thing' })
    const item = hashTable.get('something')
    item.should.have.property('key', 'something')
    item.should.have.property('foo', 'bar')
  })
  it('should put', () => {
    const hashTable = new HashTable()
    hashTable.table['1029235875'] = new HashItem('something', {key: 'something', 'foo': 'bar', 'some': 'thing'})
    hashTable.table['1029235875'].next = new HashItem('blah_blah', { key: 'blah_blah', foo: 'bar123', some: 'thing' })
    hashTable.put('blah_blah', { key: 'blah_blah', foo: 'bar456', some: 'thing' })
    const updated = hashTable.get('blah_blah')
    updated.should.have.property('foo', 'bar456')
  })

  it('should remove', () => {
    const hashTable = new HashTable()
    hashTable.table['1029235875'] = new HashItem('blah_blah', { key: 'blah_blah', foo: 'bar123', some: 'thing' })
    hashTable.remove('blah_blah')
    ;(function () { hashTable.get('blah_blah') }).should.throw(Error)
  })
})
