const HashItem = require('../hash-item')
const matchItem = require('../match-item')
describe('test match linked list', () => {
  it('should find item in linked list', () => {
    let item = new HashItem('one', {})
    let item1 = new HashItem('two', {}, item)
    let item2 = new HashItem('three', {}, item1)
    let item3 = new HashItem('four', {}, item2)
    let item4 = new HashItem('five', {}, item3)
    let item5 = new HashItem('foo', {}, item4)

    const ci = matchItem(item5, 'three')
    ci.key.should.equal('three')
  })
})
