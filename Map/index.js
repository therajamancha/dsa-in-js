const mapItem = new Map();

mapItem.set("name", "Raj");

mapItem.set(21, "age");

mapItem.set("isMarried", false);

console.log(mapItem);

console.log(mapItem.has("name"));

console.log(mapItem.get("name"));

console.log(mapItem.size);

mapItem.forEach((value, index) => {
  console.log(`${index} : ${value}`);
});

mapItem.delete(21); // delete item from map

console.log(mapItem);

mapItem.clear(); // remove all entries in the map

console.log(mapItem);
