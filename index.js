/*
console.log("Menyalakan mesin kopi");
console.log("Menggiling biji kopi");
console.log("Memanaskan air");
console.log("Mencampurkan air dan kopi");
console.log("Menuangkan kopi ke dalam gelas");
console.log("Menuangkan susu ke dalam gelas");
console.log("Kopi Anda sudah siap!");
*/

/*
const coffeeStock = require('./state');
 
console.log(coffeeStock);
*/

/* output
{ arabica: 100, robusta: 150, liberica: 200 }
*/

/*
const coffeeStock = require('./state');


const makeCoffee = (type, miligrams) => {
  if (coffeeStock[type] >= miligrams) {
    console.log("Kopi berhasil dibuat!");
  } else {
    console.log("Biji kopi habis!");
  }
}
 
makeCoffee("robusta", 80);
*/

/* output
Kopi berhasil dibuat!
*/

/*
import coffeeStock from './state.js';

const displayStock = stock => {
  for (const type in stock) {
    console.log(type);
  }
}

displayStock(coffeeStock);
*/

/*
const coffeeStock = require('./state');
 
console.log(coffeeStock);
 
/* output
{ arabica: 100, robusta: 150, liberica: 200 }
*/

import { coffeeStock, isCoffeeMachineReady } from './state.js';
 
console.log(coffeeStock);
console.log(isCoffeeMachineReady);
 
/* output
{ arabica: 100, robusta: 150, liberica: 200 }
true
*/