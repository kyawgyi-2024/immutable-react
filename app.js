// array immutability and functional programming

//add
//remove
//update

// const fruits = [ "orange", "grape", "mango", "strawberry", "blueberry"];

//add

// const arr = [...fruits, "pineapple"];

//remove

// const arr = fruits.filter((fruit) => fruit !== "mango");

//update

// const arr = fruits.map(fruit => fruit === "mango" ? "orange" : fruit);

// console.log(fruits)
// console.log(arr);

//object immutability and functional programming

// const macBook = {
//   model: "MacBook Pro",
//   memory: "16GB",
//   storage: "512GB SSD",
// };

// macBook.color = "space gray";   //add mutable object property

//add immutable object property
// const newMacBook = { ...macBook, color: "midnight",cpu:"M2" };

//remove immutable object property

// const {storage, ...newMacBook} = macBook; //storage is removed object destructuring way

//update immutable object property

// const newMacBook = {...macBook,storage:"256GB SSD",memory:"8GB"}

// console.log(macBook);
// console.log(newMacBook);

const products = [
  {
    id: 1,
    name: "MacBook Pro",
    price: 1999,
    stock: 25,
    rating: 4.8,
  },
  {
    id: 2,
    name: "iPhone 14",
    price: 799,
    stock: 50,
    rating: 4.7,
  },
  {
    id: 3,
    name: "Apple Watch Series 7",
    price: 399,
    stock: 100,
    rating: 4.6,
  },
  {
    id: 4,
    name: "iPad Pro",
    price: 999,
    stock: 30,
    rating: 4.9,
  },
  {
    id: 5,
    name: "AirPods Pro",
    price: 249,
    stock: 75,
    rating: 4.5,
  },
];

//add immutable array property

//   const newProduct = {
//     id: 6,
//     name: "AirPods Max",
//     price: 399,
//     stock: 50,
//     rating: 4.9
//   }
//   const newProducts = [...products, newProduct];

//   remove immutable array property

// const newProducts = products.filter((product) => product.id !== 3);

// update immutable array property only id 3

// const newProducts = products.map(product => {
//     if(product.id === 3){
//         return {...product,stock:product.stock + 50}}
//         return product
// })

//update immutable array all properties

// const newProducts = products.map((product) => {
//   return { ...product, price: product.price + 100 };
// });

// console.table(products);
//   console.table(newProducts);   //added new product
// console.table(newProducts);  //removed product with id 3
// console.table(newProducts);  //updated product with id 3

// console.table(newProducts); //updated product price all
