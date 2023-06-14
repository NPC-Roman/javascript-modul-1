//--------//
// Тест 1 //
//--------//
/*const productName = 'Droid';
const pricePerItem = 2000;
const message = `${productName} price of one product ${pricePerItem}`;

console.log(productName);
console.log(pricePerItem);
console.log(message);*/
//--------//
// Тест 2 //
//--------//
/*let productName = "Droid";
let pricePerItem = 2000;

productName = "Repair droid";
pricePerItem = 3500;

const message = `${productName} cost ${pricePerItem}`;

console.log(productName);
console.log(pricePerItem);
console.log(message);*/
//--------//
// Тест 3 //
//--------//
/*const login = "mango935";
const isAdmin = false;
const isOnline = true;

let distance = 617.54; 
let topSpeed = 160;*/
//--------//
// Тест 4 //
//--------//
/*const pricePerItem = 3500;
const orderedQuantity = 4;
const totalPrice = pricePerItem * orderedQuantity;

const message = `The amount of your order ${totalPrice}`;
console.log(message);*/
//--------//
// Тест 5 //
//--------//
/*const productName = "Droid";
const pricePerItem = 3500;
const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;

console.log(message);*/
//--------//
// Тест 6 //
//--------//
/*const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
const totalPrice = (pricePerDroid * orderedQuantity) + deliveryFee;
const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`

console.log(message);*/
//--------//
// Тест 7 //
//--------//
/*function sayHi() {console.log("Hello, this is my first function!")};

sayHi();*/
//--------//
// Тест 8 //
//--------//
/*function add(a, b, c) {console.log(`Addition result equals ${a + b + c}`);}
  
add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);*/
//--------//
// Тест 9 //
//--------//
/*function add(a, b, c) {return a + b + c;}
  
add(2, 5, 8); // 15
  
console.log(add(15, 27, 10));
console.log(add(10, 20, 30));
console.log(add(5, 10, 15));
  
let result = add(15, 27, 10);
console.log(`Sum one = ${result}`);  
result = add(10, 20, 30);
console.log(`Sum two = ${result}`);*/
//---------//
// Тест 10 //
//---------//
/*function makeMessage (name, price) {const message = `You picked ${name}, price per item is ${price} credits`;
    return message;
  };
  
makeMessage('Radar', 6150);
  
console.log(makeMessage('Radar', 6150));*/
//---------//
// Тест 11 //
//---------//
/*function calculateTotalPrice (orderedQuantity, pricePerItem) {const totalPrice = orderedQuantity * pricePerItem;
    return totalPrice;};
  
const message = `Total price ${calculateTotalPrice}`;
  
console.log(calculateTotalPrice(5, 100));*/
//---------//
// Тест 12 //
//---------//
/*function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
return message;
};
    
console.log(makeOrderMessage(2, 100, 500));*/
//---------//
// Тест 13 //
//---------//
/*function isAdult(age) {const passed = age >= 18;
return passed;};
isAdult(21);*/
//---------//
// Тест 14 //
//---------//
/*function isValidPassword(password) {
const SAVED_PASSWORD = 'jqueryismyjam';
const isMatch = (SAVED_PASSWORD === password);
return isMatch;};*/
//---------//
// Тест 15 //
//---------//
/*function checkAge(age) {
    let message;  
    if (age >= 18) { 
      message = 'You are an adult';
    } else {
      message = 'You are a minor';
    }  
    return message;
};  
console.log(checkAge(20));*/
//---------//
// Тест 16 //
//---------//
/*function checkStorage(available, ordered) {
    let message;
  if (ordered >= available) {
      message = 'Not enough goods in stock!';
  } else {
      message = 'Order is processed, our manager will contact you.';
  }
    return message;
  }  
  console.log(checkStorage(100, 50));*/
//---------//
// Тест 17 //
//---------//
/*let a = 5;
let b = 10;
let c = 15;
let d = 20;

a += 2;
b -= 4;
c *= 3;
d /= 10;*/
//---------//
// Тест 18 //
//---------//
/*function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
let message;
    
  const totalPrice = pricePerDroid * orderedQuantity;
  if (totalPrice > customerCredits) {
      message = `Insufficient funds!`;
  } else {
      message = `You ordered ${orderedQuantity} droids, you have ${(customerCredits - totalPrice)} credits left`;
  }  
    return message;
  }
  
console.log(makeTransaction(3000, 5, 23000));*/
//---------//
// Тест 19 //
//---------//
/*function checkPassword(password) {
    const ADMIN_PASSWORD = 'jqueryismyjam';
    let message;
  
    if (password === null) { 
      message =  'Canceled by user!';
    } else if (password === ADMIN_PASSWORD) {
      message = 'Welcome!';
    } else {
      message = 'Access denied, wrong password!';
    }
    return message;
  }  
console.log(checkPassword("jqueryismyjam"));*/
//---------//
// Тест 20 //
//---------//
/*function checkStorage(available, ordered) {
    let message;
    if (ordered === 0) { 
        message = "There are no products in the order!";
      } else if (ordered > available) {
        message = "Your order is too large, there are not enough items in stock!";
      } else {
        message = "The order is accepted, our manager will contact you";
      }
    return message;
  };
  
  console.log(checkStorage(70, 0));*/
//---------//
// Тест 21 //
//---------//
/*function isNumberInRange(start, end, number) {
  const isInRange = (number >= start) && (number <= end);
  return isInRange;
};
console.log(isNumberInRange(10, 30, 17));*/
//---------//
// Тест 22 //
//---------//
/*function checkIfCanAccessContent(subType) {
  const canAccessContent = (subType === "pro") || (subType === "vip");  
  return canAccessContent;}*/
//---------//
// Тест 23 //
//---------//
