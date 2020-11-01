function choice(items) {
  return items[Math.floor(Math.random * items.length)];
}

function remove(items, deleteItem) {
  items.map((item, index) => {
    if (item === deleteItem) {
      items[index].remove();
    }
    return "Deleted";
  });
  return items;
}

export { choice, remove };
