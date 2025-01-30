let dob =prompt("Enter your Date of Birth : ");
let age = 0;
let birthDate = new Date(dob);
let currentDate = new Date();
age = currentDate.getFullYear() - birthDate.getFullYear();
let monthDifference = currentDate.getMonth() - birthDate.getMonth();

if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())) {
    age--;
}

console.log(`Your age is ${age}`);