//---------//
//         //
//---------//
const colors = ['#47d147', '#ff8080', 'pink', '#80b3ff', 'orchid', '#1ad1ff']; //['candy', 'merigold', 'mantis', 'baby blue', 'orchid', 'rouge'];
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
/*function checkStorage(available, ordered) {
  if (ordered === 0) {
    return "Your order is empty!";
  } 
  if (ordered > available) {
    return "Your order is too large, not enough goods in stock!";
  }   
    return "The order is accepted, our manager will contact you";
}
console.log(checkStorage(150, 0));*/
//---------//
//----04---//
//---------//
//---------------===//////////////////===-------------//
/*const fruits = ["apple", "plum", "pear", "orange"];*/
//---------//
//----05---//
//---------//
/*const fruits = ["apple", "plum", "pear", "orange"];
const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElement = fruits[3];
console.log(firstElement);*/
//---------//
//----06---//
//---------//
/*const fruits = ["apple", "plum", "pear", "orange"];
console.log(fruits)

fruits[1] = "peach";
fruits[3] = "banana";
console.log(fruits)*/
//---------//
//----07---//
//---------//
/*const fruits = ["apple", "peach", "pear", "banana"];

const fruitsArrayLength = fruits.length;
console.log(`Довжина масиву: ${fruitsArrayLength}`);*/
//---------//
//----08---//
//---------//
/*const fruits = ["apple", "peach", "pear", "banana"];

const lastElementIndex = fruits.length - 1;
const lastElement = fruits[lastElementIndex];

console.log(lastElementIndex);
console.log(lastElement);
console.log(`Фрукт з номером ${lastElementIndex} називається ${lastElement}`);*/
//---------//
//----09---//
//---------//
/*function getExtremeElements(array) { 
  let miniMass

  const firstInName = array[0];
  const lastIn = array.length - 1;
  const lastInName = array[lastIn];
 
  console.log(firstInName);
  console.log(lastIn);
  console.log(lastInName);

  return miniMass = [firstInName, lastInName];
}
console.log(getExtremeElements(["Earth", "Mars", "Venus"]));*/
//---------//
//----10---//
//---------//
/*function splitMessage(message, delimiter) {
  let words;

  words = message.split(delimiter);

  return words;
}
console.log(splitMessage("Mango hurries to the train", " "));*/
//---------//
//----11---//
//---------//
/*function calculateEngravingPrice(message, pricePerWord) {
  let totalPrice
  
  const calArr = message.split(" ");
  const numLett = calArr.length;
  console.log(calArr);
  console.log(calArr.length);
  console.log(calArr.length);

  totalPrice = numLett * pricePerWord;
  return totalPrice;
}

calculateEngravingPrice("JavaScript is in my blood", 10);
console.log(calculateEngravingPrice("Web-development is creative work", 40));*/
//---------//
//----12---//
//---------//
/*function makeStringFromArray(array, delimiter) {  
  let string;

  string = array.join(delimiter);

  return string;
}
console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));*/
//---------//
//----13---//
//---------//
/*function slugify(title) {

  let slugDone;
  sluMakeLen = title.toLowerCase();
  
  sluMakeArr = sluMakeLen.split(" ");
  
  sluMakeJoy = sluMakeArr.join("-");
  
  return slugDone = sluMakeJoy
  
  }
  console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));*/
//---------//
//----14---//
//---------//
/*const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

const firstTwoEls = fruits.slice(0, 2);
console.log(firstTwoEls);
const nonExtremeEls = fruits.slice(1, 4);
console.log(`масив з усіх елементів, крім першого та останнього: ${nonExtremeEls}`);
const lastThreeEls = fruits.slice(-3);*/
//---------//
//----15---//
//---------//
/*const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];

const allClients = oldClients.concat(newClients);
console.log(allClients);*/
//---------//
//----16---//
//---------//
/*function makeArray(firstArray, secondArray, maxLength) {
    const newArr = firstArray.concat(secondArray);
    newArr.slice(0, -3);
    console.log(newArr);
    console.log(newArr.length);

    const doneArr = newArr.slice(0, maxLength);
    console.log(doneArr);
    console.log(doneArr.length);

    return doneArr;
}
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0));*/
//---------//
//----17---//
//---------//
/*const start = 3;
const end = 7;

for (let i = start; i <= end; i += 1) {
    console.log(i);
}*/
//---------//
//----18---//
//---------//
/*function calculateTotal(number) {
    const arr = Array.from({ length: number }, (_, index) => index + 1);
    console.log(arr);

    let sum = 0;
    for (let i = 0; i < arr.length; i += 1) {
        sum += arr[i];
        console.log(sum);
    }
    return sum;
}
calculateTotal(7);*/
//---------//
//----19---//
//---------//
/*const fruits = ['apple', 'plum', 'pear', 'orange'];
for (let i = 0; i < fruits.length; i += 1) {
  const fruit = fruits[i];
  console.log(fruit);
}*/
//---------//
//----20---//
//---------//
/*function calculateTotalPrice(order) {
  console.log(order)  
  let total = 0;
  
  for (let item = 0; item < order.length; item += 1) {    
  total += order[item]
}
  return total;
}
console.log(calculateTotalPrice([412, 371, 94, 63, 176]))*/
//---------//
//----21---//
//---------// //---------// //---------// //---------// //---------// //---------// //---------// //---------//
/*function findLongestWord(string) {
  let shortStrArr = string.split(" ")
  let longWorld = " ";

  for (const word of shortStrArr) {
        if (word.length > longWorld.length) {
            longWorld = word;       
        }      
    }  
return longWorld;*/
//---------// //---------// //---------// //---------// //---------// //---------// //---------// //---------//
//---------//
//----22---//
//---------//
/*function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
    for (let item = min; item <= max; item += 1) {    
    numbers.push(item)
}
  console.log(numbers)
  // Change code above this line
  return numbers;
}
createArrayOfNumbers(1, 3);
console.log(createArrayOfNumbers(29, 34));*/
//---------//
//----23---//
//---------//
/*function filterArray(numbers, value) {
    // Change code below this line
    /*const newArr = [];
 console.log(numbers.length);
 for (let item = 0; numbers[item] > value; item += 1) {    
   newArr.push(numbers[item]);
   
}
 return newArr;
 console.log(newArr);*/
/*const newArr = [];

    for (let item = 0; item < numbers.length; i += 1) {
        console.log(numbers.length);
        if (numbers[item] > value) {
            newArr.push(numbers[item]);
        }
    }
    return newArr;
    // Change code above this line
}
filterArray([1, 2, 3, 4, 5], 3);
console.log(filterArray([1, 2, 3, 4, 5], 3));*/
//---------//
//----24---//
//---------//
/*function filterArray(numbers, value) {
    // Change code below this line
    /*const newArr = [];
 console.log(numbers.length);
 for (let item = 0; numbers[item] > value; item += 1) {    
   newArr.push(numbers[item]);
   
}
 return newArr;
 console.log(newArr);*/
/*const newArr = [];

    for (let item of numbers) {
        if (item > value) {
            newArr.push(item);
        }
    }
    return newArr;
    // Change code above this line
}
filterArray([1, 2, 3, 4, 5], 3);
console.log(filterArray([1, 2, 3, 4, 5], 3));*/
//---------//
//----25---//
//---------//
/*function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];

  return fruits.includes(fruit); // Change this line
}*/
//---------//
//----26---//
//---------//
function getCommonElements(array1, array2) {
    // Change code below this line
    let newArr = [];
    for (let item = 0; item < array1.length; item += 1) {
        if (array2.includes(array1[item])) {
            newArr.push(array1[item]);
        }
    }
    return newArr;
    // Change code above this line
}
//---------//
//----  ---//
//---------//
function calculateTotalPrice(order) {
    let total = 0;
    // Change code below this line

    for (const items of order) {
        total += items;
    }

    /*for (let i = 0; i < order.length; i += 1) {
    total += order[i];
     console.log(total)
  }
*/
    // Change code above this line
    return total;
}
calculateTotalPrice([12, 85, 37, 4]);
//---------//
//----  ---//
//---------//
// Change code below this line
const a = 3 % 1;
const b = 4 % 3;
const c = 11 % 4;
const d = 12 % 7;
const e = 8 % 6;
//---------//
//----  ---//
//---------//
function getEvenNumbers(start, end) {
    // Change code below this line
    const newArr = [];
    for (let item = start; item <= end; item += 1) {
        if (item % 2 === 0) {
            newArr.push(item);
        }
    }
    return newArr;

    // Change code above this line
}
//---------//
//----  ---//
//---------//
const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
    if (i % 5 === 0) {
        number = i;
        break;
    }
}
//---------//
//----  ---//
//---------//
function findNumber(start, end, divisor) {
    // Change code below this line
    let number;

    for (let i = start; i < end; i += 1) {
        if (i % divisor === 0) {
            return i;
        }
    }

    // Change code above this line
}
