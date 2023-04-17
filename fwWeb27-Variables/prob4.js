let storedUsername = "jamesbond007";
let storedPassword = "iamjamesbond007"

let inputUsername = "jamesbond007";
let inputPassword = "iamjamesbond007";

if(inputUsername === storedUsername) {
  if(inputPassword === storedPassword) {
    console.log("Login successful!");
  }
  else {
    console.log("Login failed, check password!");
  }
}
else {
  console.log("Login failed, check username!");
}