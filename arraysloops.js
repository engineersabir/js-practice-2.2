const marks1=[96,87,75,83,66];
console.log(marks1);
console.log(marks1.length);

const heroes=["hulk","ironman","spiderman","safeguard","antman"]
// console.log(heroes);
for(i=0;i<heroes.length;i++){
    console.log(heroes[i]);
}
let cities=["lahore","ajmir","kashmir","boneer","lowerdeer"]
for(city of cities){
    console.log(city.toUpperCase());
}
let marks=[85,97,44,37,76,60]
let sum=0;
for(let val of marks){
    sum+=val;
}
let avg=sum/marks.length;

console.log(`avg marks of every student= ${avg}`);

let items=[250,645,300,900,50];

// let idx=6;
// for(let val of items){
//     let offer=val/10;
//     items[idx]=items[idx]-offer; 
//     console.log(`value after offer =${items[idx]}`);
//     idx++;
// }

// console.clear();
for(let i=0;i<items.length;i++){
    let offer=items[i]/10;
    items[i]-=offer;
}
console.log(items);

let foodItems=["salad","greentea","coffee","burger","pizza","fries"];
console.log(foodItems);
foodItems.push("Sajji");
console.log(foodItems);
foodItems.push("kabab","biryani","samosa","Daal","papaya")
console.log(foodItems);
console.log(foodItems.length)
let deletedItem=foodItems.pop();
console.log(foodItems);
console.log(deletedItem);
let deletedItem2=foodItems.pop();
console.log(foodItems);
console.log(deletedItem2);
let numbers=[88,90,76];
numbers.toString();
console.log(numbers.toString());
console.log(numbers);
console.log(foodItems.toString());
console.log(foodItems);
console.log(numbers.toString());
console.log(numbers);
let marvelHeroes=["thor","spiderman","hulk"];
let dcHeroes=["superman","batman"];
let superHeroes=marvelHeroes.concat(dcHeroes);
console.log(superHeroes);
let veggies=["carrot","cucumber","tomato"];
let fruits=["pineapple","apple","grapes","peach"];
let spices=["chilli","salt"]
let fruitChat=veggies.concat(fruits,spices);
console.log(fruitChat);
let team1=["a","b","c","d"];
let team2=["E","F","G"];
let team3=[1,2,3,4];
let myTeam=team1.concat(team2,team3)
console.log(myTeam);
let val2=marvelHeroes.shift();
console.log("deleted",val2);
marvelHeroes.unshift("antman");
console.log(marvelHeroes);



