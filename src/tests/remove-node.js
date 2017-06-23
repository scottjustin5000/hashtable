const HashItem = require('../hash-item')
const removeNode = require('../remove-node')
describe('test removing node from linked list', () => {
  it('should remove three node from linked list', () => {
    let item = new HashItem('one', {})
    let item1 = new HashItem('two', {}, item)
    let item2 = new HashItem('three', {}, item1)
    let item3 = new HashItem('four', {}, item2)
    let item4 = new HashItem('five', {}, item3)
    let item5 = new HashItem('foo', {}, item4)

    const nde = removeNode(item5, 'three')
    nde.next.next.next.key.should.equal('two')
  })

  it('should remove head node from linked list', () => {
    let item = new HashItem('one', {})
    let item1 = new HashItem('two', {}, item)
    let item2 = new HashItem('three', {}, item1)
    let item3 = new HashItem('four', {}, item2)
    let item4 = new HashItem('five', {}, item3)
    let item5 = new HashItem('foo', {}, item4)

    const nde = removeNode(item5, 'foo')
    nde.key.should.equal('five')
  })

  it('should remove tail node from linked list', () => {
    let item = new HashItem('one', {})
    let item1 = new HashItem('two', {}, item)
    let item2 = new HashItem('three', {}, item1)
    let item3 = new HashItem('four', {}, item2)
    let item4 = new HashItem('five', {}, item3)
    let item5 = new HashItem('foo', {}, item4)

    const nde = removeNode(item5, 'one')
    const undef = (nde.next.next.next.next.next === undefined)
    undef.should.equal(true)
  })
})
