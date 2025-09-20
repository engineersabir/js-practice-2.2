// // // console.log("JS file is connected!");

// // // //  let marvelHeroes=["thor","spiderman","ironman", "antman","Dr. strange"]
// // // // console.log(marvelHeroes);

// // // // // console.log(marvelHeroes.slice(1,3));
// // // // console.log(marvelHeroes.slice(0,3));
// // // // console.log(marvelHeroes.slice(1));
// // // // console.log(marvelHeroes.slice(0));

// // // // let arr=[1,2,3,4,5,6,7
// // // // ]
// // // // // arr.splice(2,3,123,345,567)
// // // // // add an Element
// // // // // arr.splice(2,0,101);
// // // // // arr.splice(3,1);
// // // // // arr.splice(3,1,789);
// // // // arr.splice(4);
// // // // // console.log(arr);
// // // // let companies=["Boomberg","microsoft","Uber","Google","IBM","Netflix"]
// // // // // remove the first company
// // // // // companies.shift();
// // // // console.log(companies);

// // // // // Remove  Uber and Add Ola in its place
// // // // // companies.splice(2,1,"Ola");
// // // // // console.log(companies);
// // // // companies.push("Amazon");
// // // // console.log(companies);

// // // // for (let i=1;i<=10;i++){
// // // //     console.log(" YA ALI MADAD...!")
// // // // }
// // // let sum =0;
// // // for (let i=1;i<=8;i++){
// // //     sum=sum+i;
// // // }
// // // console.log("sum=",sum);
// // // console.log("Loop Has Been Ended.")

// // // let str="javascript";
// // // let size=0;

// // // for(let i of str){
// // //     console.log("i=",i);
// // //     size++;
// // // }
// // // console.log("string size=",size);
// // let student={
// //     name:"Mohsin",
// //     age:24,
// //     cgpa:9.3,
// //     isPass:true,
// // };
// // for(let key in student){
// //     console.log("key=",key,"value",student[key]);
// // }
// // let num=0;

// // for(i=0;i<=100;i++){
// //     num=i/2;
// //     console.log(num);
// // }
// let i=0;
// for(i=0;i<=100;i++){
//     // console.log(i)
//     if(i%2===0){
//         console.log(i);
//     }
// }

let gameNum=44;
let userNum=prompt("Guess the game number:")
console.log(userNum);
while (userNum != gameNum){
userNum=prompt("You entered the wrong number.Guess Again:")
}
console.log("Congratulations, you entered the right number");