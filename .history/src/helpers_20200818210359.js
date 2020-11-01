function choice(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function remove(items, deleteItem) {
  return items.forEach((item, index) => {
    if (item === deleteItem) {
      items.splice(index, 1);
    }
  });
}

export { choice, remove };
