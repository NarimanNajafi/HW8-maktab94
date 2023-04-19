// function makeGamePlayer(name, totalScore, gamesPlayed) {


//     this.name = name,
//         this.totalScore = totalScore,
//         this.gamesPlayed = gamesPlayed,

//     return obj;
// }

function MakePerson(name, age) {
    this.name = name;
    this.age = age;
    this.occupation = "Hobo";
}
const jeremy = new MakePerson("Jeremy", 800);
console.log(jeremy);

// function addPropertyToObject(obj) {
//     return function (key, value) {
//         obj[key] = value;
//         return obj;
//     }
// }
// const user = { name: 'John' };
// const addProperty = addPropertyToObject(user);
// addProperty('age', 30);
// console.log(user); // { name: 'John', age: 30 }

