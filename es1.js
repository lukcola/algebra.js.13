"use strict";

var a = 78;
var b = 34;
//delete a;
//delete window.b;
var myObject = {property1: 1, property2: 2, property3: 3};

const users = [
    {name: "Fabio", surname: "Blondi"},
    {name: "Mario", surname: "Rossi"},
];

const user = { name: "Lorenzo", surname: "Verdi"};

var allUsers = [...users, user];

console.log(`ime = ${allUsers[2].name}, prezime = ${allUsers[2].surname}`)

for (let i = 0; i < 10; i++){
    setTimeout(function () {
        console.log("The number is " + i);
    }, 1000);
    console.log(i);
}
