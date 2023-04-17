// let arr=[12, 14, 15, 23, 36, 46];

// for(let i=0; i<=arr.length; i++) {
//   if((arr[i]%2===0 || arr[i]%3===0) && arr[i] <= 40) {
//     console.log(arr[i]);
//   }
// }

let string = "MasaI";

let lowerCase ="abcdefghijklmnopqrstuvwxyz";
let upperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let bag = "";
for(let i=0; i<string.length; i++) {
  for(let j=0; j<lowerCase.length; j++) {
    if(string[i]==lowerCase[j]) {
      bag = bag + upperCase[j]
    }
  for(let k=0; k<upperCase.length; k++) {
    if(string[i]==upperCase[k]) {
      bag = bag + lowerCase[k]
    }
  }
}
console.log(bag);