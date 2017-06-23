module.exports = function getItem (currentItem, key) {
  while (currentItem.next) {
    if (currentItem.key === key) return currentItem
    currentItem = currentItem.next
  }
  return currentItem
}
