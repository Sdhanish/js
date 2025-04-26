const product = {
  name: 'Soap',
  price:30,
  'delivery-time':'1 day',
  rating:{
    stars:4.5,
    count:87,
  },
  fun: function function1(){
   console.log('Hello world');
  }
}


console.log(product);
console.log(product.name);
console.log(product.price);


product.name='Socks'
console.log(product.name);
product.price=20;
console.log(product.price);
product.expireDate=23;
console.log(product.expireDate);
delete product.expireDate;
console.log(product);
console.log(typeof product);


console.log(product['name']);
console.log(product['price']);
console.log(product['delivery-time']);
console.log("product",product.rating.count);
console.log(product.rating.stars);
product.fun()



const product2={
  name:'shirt',
  'delivery-t': '1 day',
  'price':21,
   productName: ()=>{
    console.log('Dhanish S');
  },
  rating: {
    stars: 4.0,
    count: 50,
  }
}

console.log(product2);
console.log(product2['name']);product2.productName()
console.log(typeof console.log);


console.log('---------------');
const json= JSON.stringify(product2);
console.log( json);


const parsed = JSON.parse(json);
console.log(parsed);


console.log('hello'.length);
const hi = 'hello'.toLocaleUpperCase()
console.log(typeof hi);


const {price,rating } = product2;
console.log(price,rating);



const amazon1 = {
  name:'basketball',
  price:20,
}
const amazon2 = {
  name:'basketball',
  price:20,
}
 
const lower = 'Good Morning'.toLocaleLowerCase();

console.log(lower);


const comparePrice =(amazon1,amazon2)=>{

  if (amazon1.price < amazon2.price) {
    console.log(`${amazon1.name} is cheaper than ${amazon2.name}`);
  } else if (amazon1.price > amazon2.price) {
    console.log(`${amazon1.name} is more expensive than ${amazon2.name}`);
  } else {
    console.log(`${amazon1.name} and ${amazon2.name} have the same price`);
  }
}



comparePrice(amazon1,amazon2);



const isSameProduct=(amazon1,amazon2)=>{

  return amazon1.name === amazon2.name && amazon1.price === amazon2.price;
}

console.log(isSameProduct(amazon1,amazon2));














