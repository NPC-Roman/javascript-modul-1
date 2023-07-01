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
//---------//
//----19---//
//---------//
