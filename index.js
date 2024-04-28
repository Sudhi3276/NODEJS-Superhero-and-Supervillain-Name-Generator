// we have install the required superhero and
// supervillian names in the json file
// dependecies of superheros and dupervillian is 
//present in the package

var superheroes=require("superheroes");

var myname=superheroes.random();

console.log(myname);

var supervillian=require("supervillains");;
var myvil=supervillian.random();
console.log(myvil);