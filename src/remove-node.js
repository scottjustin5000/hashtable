module.exports = function remove (node, key) {
  let currentItem = node
  // if the root is the one we need to delete
  // take its next and assign to the the hash as the new root
  if (currentItem.key === key) {
    return currentItem.next
  }
  // else we search while keeping a ref to the parent
  while (currentItem.next) {
    if (currentItem.next.key === key) {
      currentItem.next = currentItem.next.next
      break
    }
    currentItem = currentItem.next
  }
  return node
}
