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
/*const pizzaPalace = {
    pizzas: ["Supercheese", "Smoked", "Four meats"],
      checkPizza(pizzaName) {
        return this.pizzas.includes(pizzaName);
      },
      order(pizzaName) {
        const isPizzaAvailable = this.checkPizza(pizzaName);
    
      if (!isPizzaAvailable) {
          return `Sorry, there is no pizza named «${pizzaName}»`;
      }
    
      return `Order accepted, preparing «${pizzaName}» pizza`;
    },
};
console.log(pizzaPalace.order("Four meats"));*/
//---------//
//----02---//
//---------//
/*const customer = {
    username: "Mango",
    balance: 24000,
    discount: 0.1,
    orders: ["Burger", "Pizza", "Salad"],
  
    getBalance() {
      return this.balance;
    },
    getDiscount() {
      return this.discount;
    },
    setDiscount(value) {
      this.discount = value;
    },
    getOrders() {
      return this.orders;
    },
    addOrder(cost, order) {
      this.balance -= cost - cost * this.discount;
      this.orders.push(order);
    },
  };
  
customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]*/
//---------//
//----03---//
//---------//
/*const historyService = {
    orders: [
      { email: "jacob@hotmail.com", dish: "Burrito" },
      { email: "solomon@topmail.net", dish: "Burger" },
      { email: "artemis@coldmail.net", dish: "Pizza" },
      { email: "solomon@topmail.net", dish: "Apple pie" },
      { email: "jacob@hotmail.com", dish: "Taco" },
    ],
  
    getOrdersLog() {
      return this.orders
        .map(order => `email: ${order.email} dish: ${order.dish}`)
        .join(" - ");
    },
    getEmails() {
      const emails = this.orders.map(order => order.email);
      const uniqueEmails = new Set(emails);
      return [...uniqueEmails];
    },
    getOrdersByEmail(email) {
      return this.orders.filter(order => order.email === email);
    },
};*/
//---------//
//----04---//
//---------//
/*const parent = {
    name: "Stacey",
    surname: "Moore",
    age: 54,
    heritage: "Irish",
};
  
const child = Object.create(parent);
  
child.name = "Jason";
child.age = 27;
  
console.log(child);
console.log(child.surname);
console.log(child.age);*/
//---------//
//----05---//
//---------//
/*const ancestor = {
    name: "Paul",
    age: 83,
    surname: "Dawson",
    heritage: "Irish",
};
  
const parent = Object.create(ancestor);
parent.name = "Stacey";
parent.surname = "Moore";
parent.age = 54;
  
const child = Object.create(parent);
child.name = "Jason";
child.age = 27;*/
//---------//
//----06---//
//---------//
/*class Car { }*/
//---------//
//----07---//
//---------//
/*class Car {
  constructor (brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  };
};
console.log(new Car("Audi", "Q3", 36000));*/
//---------//
//----08---//
//---------//
/*class Car {
  constructor({brand, model, price}) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
};*/
//---------//
//----09---//
//---------//
/*class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

getPrice() {
  return this.price;
};

changePrice(newPrice) {
  this.price = newPrice;
  return;
};
};*/
//---------//
//----10---//
//---------//
/*class Storage {
    constructor(items) {
        this.items = items;
    }
    getItems() {
        return this.items;
    }

    addItem(newItem) {
        return this.items.push(newItem);
    }
    //////////////////////////////////////////////////
    removeItem(itemToRemove) {
        //return this.items.splice(itemToRemove, 1)
        const newArr = this.items.indexOf(itemToRemove);
        if (newArr !== -1) {
            this.items.splice(newArr, 1);
        }
    }
    //////////////////////////////////////////////////
}
// Change code above this line
const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]*/
//---------//
//----11---//
//---------//
/*class StringBuilder {
  constructor(value) {
  this.value = value
}
getValue() {
  return this.value
}
  
padStart(str) {
  this.value = str + this.value
}

padEnd(str) {
  this.value = this.value + str
}

padBoth(str) {
 this.value = str + this.value + str
}  
};
// Change code above this line
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="*/
//---------//
//----12---//
//---------//
/*class Car {
  #brand;
  model
  price 
constructor({ brand, model, price }) {
  this.#brand = brand;
  this.model = model;
  this.price = price;
};
getBrand() {
  return this.#brand;
};

changeBrand(newBrand) {
 return this.#brand = newBrand;  
};
};*/
//---------//
//----13---//
//---------//
/*class Storage {
  #items
  constructor(items) {
    this.#items = items;
  }
  getItems() {
    return this.#items;
  }
  addItem(newItem) {
    this.#items.push(newItem);
  }
  removeItem(itemToRemove) {
    this.#items = this.#items.filter(item => item !== itemToRemove);
  }
}
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]*/
//---------//
//----14---//
//---------//
/*class StringBuilder {
    #value;
    constructor(initialValue) {
        this.#value = initialValue;
    }
    getValue() {
        return this.#value;
    }
    padEnd(str) {
        this.#value += str;
    }
    padStart(str) {
        this.#value = str + this.#value;
    }
    padBoth(str) {
        this.padStart(str);
        this.padEnd(str);
    }
}
const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="*/
//---------//
//----15---//
//---------//
/*class Car {
  #brand;
  #model;
  #price;
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.#model = model;
    this.#price = price;
  };

  get brand() {
    return this.#brand;
  };

  set brand(newBrand) {
    this.#brand = newBrand;
  };

  get model() {
    return this.#model;
  };

  set model(newModel) {
    this.#model = newModel;
  };

  get price() {
    return this.#price;
  };

  set price(newPrice) {
    this.#price = newPrice;
  };
};*/
//---------//
//----16---//
//---------//
/*class Car {
  static MAX_PRICE = 50000;  
  #price;
  constructor({ price }) {
    this.#price = price;
  }
  get price() {
    return this.#price;
  }
  set price(newPrice) {
     if (newPrice <= Car.MAX_PRICE) this.#price = newPrice
  }
};
const audi = new Car({ price: 35000 });
console.log(audi.price); // 35000
audi.price = 49000;
console.log(audi.price); // 49000
audi.price = 51000;
console.log(audi.price); // 49000*/
//---------//
//----17---//
//---------//
/*class Car {
  static #MAX_PRICE = 50000;
  static checkPrice(price) {
     if (price < Car.#MAX_PRICE) 
     {return 'Success! Price is within acceptable limits'}
      else {return 'Error! Price exceeds the maximum'}
  }
constructor({ price }) {
    this.price = price;
  }
}
const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });
console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"*/
//---------//
//----18---//
//---------//
/*class User {
    constructor(email) {
        this.email = email;
    }
    get email() {
        return this.email;
    }
    set email(newEmail) {
        this.email = newEmail;
    }
}
class Admin extends User {
    static AccessLevel = { BASIC: 'basic', SUPERUSER: 'superuser' };
}*/
//---------////---------////---------//
//---------////----19---////---------//
//---------////---------////---------//
/*class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  // Change code below this line

  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };
  constructor ({email, accessLevel}) {
  super(email)
  }
  // Change code above this line
}

const mango = new Admin({
  email: "mango@mail.com",
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"*/
