const hash = require('../hash')
describe('test hash', () => {
  it('should hash', () => {
    const h = hash('foo', 97845)
    h.should.equal(1446816713)
  })
  it('should create hash incremented by 1', () => {
    const h = hash('foo', 97846)
    h.should.equal(1446816714)
  })
  it('should create another unique', () => {
    const h = hash('fooo', 97847)
    h.should.equal(801206043)
  })
  it('should create another unique', () => {
    const h = hash('fooo', 97848)
    h.should.equal(801165083)
  })
})
