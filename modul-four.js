//---------//
//         //
//---------//
const colors = ['#47d147', '#ff8080', 'pink', '#80b3ff', 'orchid', '#1ad1ff'];
const max = colors.length - 1;
const min = 0;
const index = Math.round(Math.random() * (max - min) + min);
const color = colors[index];
console.log(color);
document.body.style.backgroundColor = color;
//---------//
//         //
//---------//
//--------------------------------------------------------------------------//
//---------//
//----01---//
//---------//
/*function makePizza() {
    return "Your pizza is being prepared, please wait.";
}
  
const result = makePizza();
console.log(result);
const pointer = makePizza;
console.log(makePizza);*/
//---------//
//----02---//
//---------//
/*function deliverPizza(pizzaName) {
    return `Delivering ${pizzaName} pizza.`;
  }
  
function makePizza(pizzaName) {
    return `Pizza ${pizzaName} is being prepared, please wait...`;
}
  
function makeMessage(pizzaName, callback) {
    return callback(pizzaName);
}
  
console.log(makeMessage("Royal Grand", makePizza));*/
//---------//
//----03---//
//---------//
/*function makePizza(pizzaName, callback) {
    console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
    callback(pizzaName);
}
  
makePizza("Royal Grand", function deliverPizza(pizzaName) {
    console.log(`Delivering pizza ${pizzaName}.`);
});
  
makePizza("Ultracheese", function eatPizza(pizzaName) {
     console.log(`Eating pizza ${pizzaName}`);
});*/
  