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
/*const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
  };
  
  console.log(apartment)*/
//---------//
//----02---//
//---------//
/*const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
  
    owner: {
      name: "Henry",
      phone: "982-126-1588",
      email: "henry.carter@aptmail.com",
    }
  };
  
  console.log(apartment);
  console.log(apartment.owner)*/
//---------//
//----03---//
//---------//
/*const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
  };
  
  const aptRating = apartment.rating;
  const aptDescr = apartment.descr;
  const aptPrice = apartment.price;
  const aptTags = apartment.tags;
  const aptPic = apartment.imgUrl;
  
  console.log(aptPic);*/
//---------//
//----04---//
//---------//
/*const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
    owner: {
      name: "Henry",
      phone: "982-126-1588",
      email: "henry.carter@aptmail.com",
    },
  };

  const ownerName = apartment.owner.name;
  const ownerPhone = apartment.owner.phone;
  const ownerEmail = apartment.owner.email;
  const numberOfTags = apartment.tags.length;
  const firstTag = apartment.tags[0];
  const lastTag = apartment.tags[2];*/
//---------//
//----05---//
//---------//
/*const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

const aptRating = apartment['rating'];
const aptDescr = apartment['descr'];
const aptPrice = apartment['price'];
const aptTags = apartment['tags'];
console.log(aptTags)*/
//---------//
//----06---//
//---------//
/*const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
    owner: {
      name: "Henry",
      phone: "982-126-1588",
      email: "henry.carter@aptmail.com",
    },
  };
  
  apartment.price = 5000;
  apartment.rating = 4.7;
  apartment.tags.push("trusted");
  apartment.owner.name = "Henry Sibola";
    
  console.log(apartment);*/
//---------//
//----07---//
//---------//
/*const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4.7,
    price: 5000,
    tags: ["premium", "promoted", "top", "trusted"],
    owner: {
      name: "Henry Sibola",
      phone: "982-126-1588",
      email: "henry.carter@aptmail.com",
    },
  };
  
  apartment.area = 60;
  apartment.rooms = 3;
  apartment.location = {}
  apartment.location.country = "Jamaica";
  apartment.location.city = "Kingston";
  console.log(apartment);*/
//---------//
//----08---//
//---------//
/*const name = "Repair Droid";
const price = 2500;
const image = "https://via.placeholder.com/640x480";
const tags = ["on sale", "trending", "best buy"];

const product = {
  name,
  price,
  image,
  tags
};*/
//---------//
//----09---//
//---------//
/*const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
  [emailInputName]: "henry.carter@aptmail.com",
  [passwordInputName]:  "jqueryismyjam",
};

console.log(credentials.email);*/
//---------//
//----10---//
//---------//
/*const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
  };
  const keys = [];
  const values = [];
  
  for (key in apartment) {
    keys.push(key)
    console.log(keys);
  };
  
  for (key in apartment) {
    values.push(apartment[key])
    console.log(values);
  };*/
//---------//
//----11---//
//---------//
/*const keys = [];
const values = [];
const advert = {
  service: "apt",
};
console.log(advert);

const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

console.log(apartment);

for (const items in apartment) {
    if (apartment.hasOwnProperty(items)) {
       keys.push(items);
       values.push(apartment[items]);
  } 
}*/
//---------//_//---------//_//---------//
//----RED--//_//----12---//_//----RED--//
//---------//_//---------//_//---------//
/*function countProps(object) {
  let propCount = 0;
  
  for (const items in object) {
    if (object.hasOwnProperty(items)){
        console.log(object[items])

        propCount += 1
    } 
}
  return propCount;
  console.log(propCount);
}
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));*/
//---------//
//----13---//
//---------//
/*const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
const keys = Object.keys(apartment);

for (const key of keys) {        
   
    values.push(apartment[key]);
  
}
console.log(values)*/
//---------//
//----14---//
//---------//
/*function countProps(object) {

  let propCount = 0; 

  const keys = Object.keys(object);

  for (const key of keys) {
      propCount += 1;
  }
  
  return propCount;

}
console.log(countProps({ name: "Mango", age: 2 }))
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }))*/
//---------//
//----15---//
//---------//
/*const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};

const keys = Object.keys(apartment);
const values = Object.values(apartment);

console.log(keys);
console.log(values);*/
//---------//
//----16---//
//---------//
/*function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
  const paid = Object.values(salaries);
  console.log(typeof paid);

  for (const value of paid) {
  totalSalary += value;
  }
    
  // Change code above this line
  return totalSalary;
}
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));*/
//---------//
//----16---//
//---------//
/*function countTotalSalary(salaries) {
  let totalSalary = 0;
 
  const paid = Object.values(salaries);
  console.log(typeof paid);

  for (const value of paid) {
  totalSalary += value;
  }    

  return totalSalary;
}
 console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));*/
//---------//
//----17---//
//---------//
/*const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];

for (const color of colors) {  
  hexColors.push(color.hex)
  rgbColors.push(color.rgb)
}
console.log(hexColors)*/
//---------//
//----18---//
//---------//
/*const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  for (const items of products) {  
      if (items.name === productName) {        
          return items.price           
        }       
  }
  return null
  console.log(items)
}
console.log(getProductPrice("Droid"))
console.log(getProductPrice("Engine"))*/
//---------//_//---------//_//---------//
//----RED--//_//----19---//_//----RED--//
//---------//_//---------//_//---------//
const products = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Grip', price: 1200, quantity: 9 },
];
const nameKey = 'name';
console.log(products[nameKey]);

function getAllPropValues(propName) {
    // Change code below this line
    /* console.log(propName)
  const allValues = []


  for (const items of products) {  
    console.log(items.name);    
    console.log(items.quantity); 
    
    
       if (items.name === propName) {         
            allValues.push(items.name)
            return allValues          
       }
  }*/
    let allValues = [];

    for (let item of products) {
        console.log(Object.keys(item));

        if (Object.keys(item).includes(propName)) {
            allValues.push(item[propName]);
        }
    }
    return allValues;
    // Change code above this line
}
getAllPropValues('name');
//---------//_//---------//_//---------//
//----RED--//_//----20---//_//----RED--//
//---------//_//---------//_//---------//
const products = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Grip', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
    // Change code below this line

    let sum = 0;

    for (let item of products) {
        //console.log(products.price)
        //console.log(Object.keys(item))
        //console.log(Object.values(item))

        if (productName === item.name) {
            sum = item.price * item.quantity;
        }
    }
    //console.log(sum)
    return sum;

    // Change code above this line
}
calculateTotalPrice('Droid');
//---------//
//----21---//
//---------//
/*const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
const { yesterday, today, tomorrow } = highTemperatures
const meanTemperature = (yesterday + today + tomorrow) / 3;*/
//---------//
//----22---//
//---------//
/*const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
const { yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures
const meanTemperature = (yesterday + today + tomorrow) / 3;
console.log(meanTemperature)*/
//---------//_//---------//_//---------//
//----RED--//_//----23---//_//----RED--//
//---------//_//---------//_//---------//
const highTemperatures = {
    yesterday: 28,
    today: 26,
    tomorrow: 33,
};

const {
    yesterday: highYesterday,
    today: highToday,
    tomorrow: highTomorrow,
    icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
} = highTemperatures;

const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
//---------//
//----24---//
//---------//
/*const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];
const hexColors = [];
const rgbColors = [];

for (const { hex, rgb } of colors) {
  hexColors.push(hex);
  rgbColors.push(rgb);
}*/
//---------//
//----25---//
//---------//
/*const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};

const {
  today: {
    low: lowToday, 
    high: highToday, 
    icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"},
  tomorrow: {
    low: lowTomorrow,
    high: highTomorrow,
    icon: tomorrowIcon = 
"https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
  }
} = forecast*/
//---------//
//----26---//
//---------//
/*function calculateMeanTemperature(forecast) {
  const {
  today: {
    low: todayLow, 
    high: todayHigh },
   
  tomorrow: {
    low: tomorrowLow,
    high: tomorrowHigh,
  }
} = forecast  
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}

calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} })*/
//---------//
//----27---//
//---------//
/*const scores = [89, 64, 42, 17, 93, 51, 26];
const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);

console.log(bestScore)*/
//---------//
//----28---//
//---------//
/*const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];

const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
console.log(allScores)
const bestScore = Math.max(...allScores);
console.log(bestScore)
const worstScore = Math.min(...allScores);
console.log(worstScore)*/
//---------//
//----29---//
//---------//
/*const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};

const finalSettings = {...defaultSettings, ...overrideSettings};*/
//---------//
//----30---//
//---------//
/*function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";

  const base = {
    completed: false,
    category: "General",
    priority: "Normal" ,
  };
  result = {...base, ...data};
  return result;

}
console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));
console.log(makeTask({ priority: 'Low', text: 'Choose shampoo' }));*/
//---------//
//----31---//
//---------//
/*function add(...args) {
  let total = 0;
  for (const arg of args) {
    total += arg;
  }
  return total;
}
console.log(add(74, 11, 62, 46, 12, 36))*/
//---------//
//----32---//
//---------//
/*function addOverNum(firstNum, ...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > firstNum)
      total += arg;
  }
  return total;
}
console.log(addOverNum(15, 32, 6, 13, 19, 8));
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));*/
//---------//
//----33---//
//---------//
/*function findMatches(arrOne, ...arrTwo) {
  const matches = [];

  for (const item of arrOne) {
      console.log(item);
      if (arrTwo.includes(item)) {
          matches.push(item);
      }
  }    
  return matches;
}
console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));*/
//---------//
//----34---//
//---------//
/*const bookShelf = {
    books: ['The last kingdom', 'The guardian of dreams'],
    getBooks() {
        return 'Returning all books';
    },
    addBook(bookName) {
        return `Adding book ${bookName}`;
    },
    removeBook(bookName) {
        return `Deleting book ${bookName}`;
    },
    updateBook(oldName, newName) {
        return `Updating book ${oldName} to ${newName}`;
    },
};
console.log(bookShelf.updateBook('Sands of dune', 'Dune'));*/
//---------//
//----35---//
//---------//
/*const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {

  const bookIndex = this.books.indexOf(oldName);      
  this.books.splice(bookIndex, 1, newName);

  },
};*/
//---------//
//----36---//
//---------//
/*const atTheOldToad = {
  potions: []
 };*/
//---------//
//----37---//
//---------//
/*const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  getPotions() {
  return this.potions;
  }
};*/
//---------//
//----38---//
//---------//
/*const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  addPotion(potionName) {
  this.potions.push(potionName);
  },
};*/
//---------//
//----39---//
//---------//
/*const atTheOldToad = {
    potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
    removePotion(potionName) {
        const potionIndex = this.potions.indexOf(potionName);
        this.potions.splice(potionIndex, 1);
    },
};*/
//---------//
//----40---//
//---------//
/*const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.indexOf(oldName);      
    this.potions.splice(potionIndex, 1, newName);
  },
};*/


const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    const potionIndex = this.potions.indexOf(potionName);
    this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.indexOf(oldName);
    this.potions.splice(potionIndex, 1, newName);
  },
  // Change code above this line
};
 /*getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    const potionIndex = this.potions.indexOf(potionName);
    this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.indexOf(oldName);      
    this.potions.splice(potionIndex, 1, newName);
  },*/


  const atTheOldToad = {
    potions: [
      { name: "Speed potion", price: 460 },
      { name: "Dragon breath", price: 780 },
      { name: "Stone skin", price: 520 },
    ],
    // Change code below this line
    getPotions() {
      return this.potions;
    },
    addPotion(newPotion)    
      {
  
          
      if (this.potions.includes(newPotion) {
        return `Error! Potion ${newPotion} is already in your inventory!`;
      }
      this.potions.push(newPotion);
    },
  
  
    removePotion(potionName) {
      const potionIndex = this.potions.indexOf(potionName);
  
      if (potionIndex === -1) {
        return `Potion ${potionName} is not in inventory!`;
      }
  
      this.potions.splice(potionIndex, 1);
    },
    updatePotionName(oldName, newName) {
      const potionIndex = this.potions.indexOf(oldName);
  
      if (potionIndex === -1) {
        return `Potion ${oldName} is not in inventory!`;
      }
  
      this.potions.splice(potionIndex, 1, newName);
    },
    // Change code above this line
  };
console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
console.log(atTheOldToad.addPotion({ name: 'Power potion', price: 270 }));