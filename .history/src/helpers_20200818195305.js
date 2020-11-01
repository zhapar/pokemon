function choice(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function remove(items, deleteItem) {
  return items.map((item, index) => {
    if (item === deleteItem) {
      items.splice(index, 1);
    }
    return items;
  });
}

export { choice, remove };
