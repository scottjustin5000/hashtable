function multiply (k, c) {
  return ((k & 0xffff) * c) + ((((k >>> 16) * c) & 0xffff) << 16)
}

function rotl (k, c) {
  return (k << c) | (k >>> (32 - c))
}

function fmix (h) {
  h ^= h >>> 16
  h = multiply(h, 0x85ebca6b)
  h ^= h >>> 13
  h = multiply(h, 0xc2b2ae35)
  h ^= h >>> 16

  return h
}

module.exports = function x86_32 (key, seed) {
  let remainder = key.length % 4
  let bytes = key.length - remainder
  let h1 = seed
  let c1 = 0xcc9e2d51
  let c2 = 0x1b873593
  let i = 0
  var k1 = false

  while (i < bytes) {
    // four byte chunks
    k1 =
      ((key.charCodeAt(i) & 0xff)) |
      ((key.charCodeAt(++i) & 0xff) << 8) |
      ((key.charCodeAt(++i) & 0xff) << 16) |
      ((key.charCodeAt(++i) & 0xff) << 24)
    ++i

    k1 = multiply(k1, c1)
    k1 = rotl(k1, 15)
    k1 = multiply(k1, c2)

    h1 ^= k1
    h1 = rotl(h1, 13)
    h1 = multiply(h1, 5) + 0xe6546b64
  }

  var k1 = 0

  switch (remainder) {
    case 3: k1 ^= (key.charCodeAt(i + 2) & 0xff) << 16
    case 2: k1 ^= (key.charCodeAt(i + 1) & 0xff) << 8
    case 1:
      k1 ^= (key.charCodeAt(i) & 0xff)
      k1 = multiply(k1, c1)
      k1 = rotl(k1, 15)
      k1 = multiply(k1, c2)
      h1 ^= k1
  }

  h1 ^= key.length

  return h1 >>> 0
}
