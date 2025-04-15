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






