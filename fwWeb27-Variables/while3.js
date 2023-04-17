let number = 1;
let sum = 0;
while(number<=20) {
  if(number%3==0) {
    sum = sum + number;
  }
  number++;
}
console.log(sum);