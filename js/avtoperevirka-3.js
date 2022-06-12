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

// console.log(countProps({ name: "Mango", age: 2 }));

/**
 * =====================================================
 * task 16
 */

function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
  const values = Object.values(salaries);

  for (const value of values) {
    totalSalary += value;
  }

  // Change code above this line
  return totalSalary;
}

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

/**
 * ====================================================
 * task 18
 */

const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Change code below this line

  let prouctPrice = null;

  for (const product of products) {
    // total = product.name === productName ? product.price : null;

    if (product.name === productName) {
      prouctPrice = product.price;
      // return total;
    }
  }
  return prouctPrice;
}

// console.log(getProductPrice('Scanner'));

/**
 * task 19
 */

const products1 = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
  let values = [];

  for (const product of products1) {
    if (product[propName]) {
      values.push(product[propName]);
    }
  }
  return values;
  // Change code above this line
}

// console.log(getAllPropValues('price'));
// console.log(getAllPropValues('quan0tity'));

/**
 * task 20
 */

const products2 = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Change code below this line
  let total = 0;

  for (const product of products2) {
    if (productName === product.name) {
      total = product.price * product.quantity;
    }
  }
  return total;

  // Change code above this line
}

// console.log(calculateTotalPrice('Scanner'));

/**
 *
 */

const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

for (const color of colors) {
  const { hex, rgb } = color;
  hexColors.push(hex);
  rgbColors.push(rgb);
}

// console.log(hexColors);
// console.log(rgbColors);

/**
 * task 41
 */

const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  // Пиши код ниже этой строки
  getPotions() {
    return this.potions;
  },

  addPotion(potionName) {
    for (const potion of this.potions) {
      if (potion.name === potionName.name) {
        return `Error! Potion ${potion.name} is already in your inventory!`;
      }
    }

    this.potions.push(potionName);
  },

  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      const potion = this.potions[i];

      if (potionName === potion.name) {
        this.potions.splice(i, 1);
      }
    }
  },

  updatePotionName(oldName, newName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      const potion = this.potions[i];

      if (oldName === potion.name) {
        potion.name = newName;
      }
    }
  },
};

// console.log(atTheOldToad.getPotions());
// atTheOldToad.addPotion({ name: 'Power potion', price: 270 });
// atTheOldToad.addPotion({ name: 'Stone skin', price: 520 });
// atTheOldToad.removePotion('Dragon breath');
// atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');
// atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion');
