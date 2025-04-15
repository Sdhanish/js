let hour=19;
let name='Dhanish S';
if (hour>=6 && hour <12) {
  console.log(`Good Morning ${name}`)
} else if(hour>=13 && hour <17){
  console.log(`Good Afternoon ${name}`);
}else{
  console.log(`Good Night ${name}`); 
}

const age = 4;
const isHoliday=true;

if ((age <6 || age >65 ) && isHoliday) {
  console.log(`Eligible for Discount `); 
}else{
  console.log('Not Eligible for discount');
  
}

(age<6 || age>65) && isHoliday ? console.log('eligible') : console.log('not eligible');



const random = Math.random();
let result = '';
const guess = 'Heads';

console.log(random);
random < 0.5 ? console.log('Heads') : console.log('Tails');

random < 0.5  ? 
(result='Heads', console.log(`The Result is ${result}`))
 : (
 result='Tails',
 console.log(`The Result is ${result}`))

guess === result ? console.log(`You win`) : console.log('You lost');









