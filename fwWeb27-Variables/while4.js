let start = 1;
let sum = 0;
let count = 0;
while(start<=100) {
  if(start%2==0) {
    sum += start;
    count++;
  }
  start++;
}

let avg = sum/count;
console.log("Average is", avg)