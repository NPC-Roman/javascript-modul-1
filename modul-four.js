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
//---------//
//----04---//
//---------//
const pizzaPalace = {
    pizzas: ["Ultracheese", "Smoked", "Four meats"],
    order(pizzaName, makePizza, onOrderError) {
      for (pizza of this.pizzas) {
        //console.log(pizza) 
        if (this.pizzas.includes(pizzaName)) {
          return makePizza(pizzaName)         
        }    
        return (`Error! There is no pizza with a name ${pizzaName} in the assortment.`)
      }
    }
  };
  // Change code above this line
  
  // Callback for onSuccess
  function makePizza(pizzaName) {
    return `Your order is accepted. Cooking pizza ${pizzaName}.`;
  }
  
  // Callback for onError
  function onOrderError(error) {
    return `Error! ${error}`;
  }
  
  // Method calls with callbacks
  pizzaPalace.order("Smoked", makePizza, onOrderError);
  console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
  pizzaPalace.order("Four meats", makePizza, onOrderError);
  pizzaPalace.order("Big Mike", makePizza, onOrderError);
  pizzaPalace.order("Vienna", makePizza, onOrderError);
//---------//
//----05---//
//---------//
/*function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  
  orderedItems.forEach((elem, idx) => {
    console.log(elem);
    console.log(idx);
    console.log(orderedItems);   
    totalPrice += orderedItems[idx];
  });

  return totalPrice;
}
calculateTotalPrice([12, 85, 37, 4])*/
//---------//
//----06---//
//---------//
/*function filterArray(numbers, value) {
    const filteredNumbers = [];
  
    numbers.forEach(elem => {
      console.log(elem);
      const i = elem > value
      console.log(i);
      if (elem > value) {
        filteredNumbers.push(elem);
      }
    });
    
    return filteredNumbers;
  }
  filterArray([12, 24, 8, 41, 76], 20);
  console.log(filterArray([12, 24, 8, 41, 76], 20));*/
//---------//
//----07---//
//---------//
function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    // Change code below this line
    firstArray.forEach(item => {
      console.log(item)
    });
  
    for (let i = 0; i < firstArray.length; i += 1) {
      if (secondArray.includes(firstArray[i])) {
        commonElements.push(firstArray[i]);
      }
    }
  
    return commonElements;
    // Change code above this line
  }
//---------//
//----08---//
//---------//
/*onst calculateTotalPrice = (quantity, pricePerItem) => {
return quantity * pricePerItem;
}*/
//---------//
//----09---//
//---------//  
/*const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;*/
//---------//
//----10---//
//---------// 
/*const calculateTotalPrice = orderedItems => {
    let totalPrice = 0;
  
    orderedItems.forEach((item) => {
      totalPrice += item;
    });
  
return totalPrice;
}*/
//---------//
//----11---//
//---------//
/*const filterArray = (numbers, value) => {
    const filteredNumbers = [];
  
    numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
      }
    });
    
return filteredNumbers;
}*/
//---------//
//----12---//
//---------//
/*const getCommonElements = (firstArray, secondArray) => {
const commonElements = [];
      firstArray.forEach((element) => {
        if (secondArray.includes(element)) {
           commonElements.push(element);
        }
      });
return commonElements;
}*/
//---------//
//----13---//
//---------//
/*function changeEven(numbers, value) {
    let newArr = []
  
    numbers.forEach(item => {
      if (item % 2 === 0) {
          console.log(item)       
          newArr.push(item + value)
      } else 
            {newArr.push(item)}
            console.log(newArr)
    });
return newArr;
}
changeEven([17, 24, 68, 31, 42], 100)*/
//---------//
//----14---//
//---------//
/*const planets = ["Earth", "Mars", "Venus", "Jupiter"];
const planetsLengths = planets.map(item => item.length);
console.log(planets);
console.log(planetsLengths);*/
//---------//
//----15---//
//---------//
/*const books = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      rating: 8.38,
    },
    {
      title: "Beside Still Waters",
      author: "Robert Sheckley",
      rating: 8.51,
    },
    {
      title: "The Dream of a Ridiculous Man",
      author: "Fyodor Dostoevsky",
      rating: 7.75,
    },
    { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
    { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
  ];
const titles = books.map(item => item.title);
console.log(titles)*/
//---------//
//----16---//
//---------//
/*const books = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      genres: ["adventure", "history"],
    },
    {
      title: "Beside Still Waters",
      author: "Robert Sheckley",
      genres: ["fiction"],
    },
    {
      title: "Redder Than Blood",
      author: "Tanith Lee",
      genres: ["horror", "mysticism"],
    },
  ];
const genres = books.flatMap(item => item.genres);
console.log(genres);*/
//---------//
//----17---//
//---------//
/*const getUserNames = users => {
    const name = users.map(user => user.name)
    return name  
};*/
//---------//
//----18---//
//---------//
/*const getUserEmails = users => {
const email = users.map(mail => mail.email);
console.log(email);
return email;};
console.log(getUserEmails);*/
//---------//
//----19---//
//---------//
/*const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

const evenNumbers = numbers.filter(item => item % 2 === 0);
console.log(evenNumbers);
const oddNumbers = numbers.filter(item => item % 2 !== 0);
console.log(oddNumbers);*/
//---------//
//----20---//
//---------//
/*const books = [
{
title: "The Last Kingdom",
author: "Bernard Cornwell",
genres: ["adventure", "history"],
},
    {
      title: "Beside Still Waters",
      author: "Robert Sheckley",
      genres: ["fiction", "mysticism"],
    },
    {
      title: "Redder Than Blood",
      author: "Tanith Lee",
      genres: ["horror", "mysticism", "adventure"],
    },
  ];
  
const allGenres = books.flatMap(item => item.genres);
console.log(allGenres)
const uniqueGenres = allGenres.filter((genr, idx, mass) => mass.indexOf(genr) ===  idx);
console.log(uniqueGenres)*/
//---------//
//----21---//
//---------//