//---------//
//         //
//---------//
const colors = ['#47d147', '#ff1a1a', 'pink', '#80b3ff', 'orchid', '#1ad1ff']; //['candy', 'merigold', 'mantis', 'baby blue', 'orchid', 'rouge'];
const max = colors.length - 1;
const min = 0;

const index = Math.round(Math.random() * (max - min) + min);

const color = colors[index];

console.log(color);

document.body.style.backgroundColor = color;
//---------//
//         //
//---------//
//-------------------------------------------------------------------------//
//---------//
//----01---//
//---------//
/*function checkAge(age) {
    if (age >= 18) { 
      return "You are an adult";
    }
    return "You are a minor";
  }*/
//---------//
//----02---//
//---------//
/*function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
    if (password === ADMIN_PASSWORD) {
      return "Welcome!";
    } return "Access denied, wrong password!";
  }*/
//---------//
//----03---//
//---------//
function checkStorage(available, ordered) {
    // Change code below this line
    let message;
  
    if (ordered === 0) {
      message = "Your order is empty!";
    } else if (ordered > available) {
      message = "Your order is too large, not enough goods in stock!";
    } else {
      message = "The order is accepted, our manager will contact you";
    }
  
    return message;
    // Change code above this line
  }
  