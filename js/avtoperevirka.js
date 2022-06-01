// task #13

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// console.log(keys);

// for (const key of keys) {
//     values.push(apartment[key])
    
// }
// console.log(values);

// task #14

function countProps(object) {
  // Change code below this line
  let propCount = 0;

  const keys = Object.keys(object);
    console.log(keys);
    
//   for (const key in keys) {
    if (keys.hasOwnProperty()) {
      propCount += 1;
    }
//   }

    return propCount;
    
  // Change code above this line
}

console.log(countProps({ name: "Mango", age: 2 }));