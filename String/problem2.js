let arr = ["Goku", "Gohan", "Naruto", "Sasuke"];

let sum = 0;
for(let i=0; i<arr.length; i++) {
  sum = sum + arr[i].length;
}
console.log(sum);