const obj = {
  name: "Raj Amancha",
  age: 25,
  isMarried: false,
  qualifications: ["BCA", "ITI"],
  getNameAndAge: function () {
    return this.name + " " + this.age;
  },
};

console.log(obj.getNameAndAge());

const obj1 = JSON.parse(JSON.stringify({ ...obj })); // deep clone

// delete obj1.name; // delete item from the object

// console.log(obj1);

// check if objects are same or not with equal to operator or with object property only give true if not deep clone
console.log(obj === obj1);

console.log(Object.is(obj, obj1));

// get objet property
console.log(obj.name);

console.log(obj["name"]);

// check if name key exist or not
console.log(obj.hasOwnProperty("name"));

console.log("name" in obj);

// freeze (not able to modify key or values)
Object.freeze(obj); // to freeze the object from getting update and delete

console.log(Object.isFrozen(obj)); // to check if frozen or not

// seal (not able to modify keys)
Object.seal(obj1);

console.log(Object.isSealed(obj1)); // to check if sealed or not

console.log(obj);

// loop on object
for (x in obj) {
  console.log(x + " : " + obj[x]);
}

Object.keys(obj).map((data) => {
  console.log(data);
});

Object.values(obj).map((data) => {
  console.log(data);
});

Object.entries(obj).map((data) => {
  console.log(data);
});
