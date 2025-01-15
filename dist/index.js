"use strict";
// let a: string= "krishna";
// let num:number=343;
const users = [
    {
        name: "krish",
        age: 100
    },
    {
        name: "gopal",
        age: 200
    },
    {
        name: "rajesh",
        age: 300
    }
];
const filterByPeoples = (arr, property, value) => {
    return arr.filter((item) => item[property] === value);
};
const filteredPeopleByName = filterByPeoples(users, "name", "krish");
const filteredPeopleByAge = filterByPeoples(users, "age", 100);
console.log(filteredPeopleByAge);
