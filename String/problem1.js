let str = "Masai School A transformation in Education";

let words = 0;
for(let i=0; i<str.length;i++) {
  if(str[i]===" ") {
    words++;
  }
}
console.log("Total no. of words are", words+1);