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
class Car {
    constructor (brand, model, price) {
      this.brand = brand;
      this.model = model;
      this.price = price;
    };
};
console.log(new Car("Audi", "Q3", 36000));