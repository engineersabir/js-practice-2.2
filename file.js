// // // // let someNumber = 33
// // // // let stringNumber = String(someNumber);
// // // // console.log(stringNumber);
// // // // console.log(typeof stringNumber);
// // // // //  OPERATIONS 

// // // // let value = 3
// // // // let negValue = -value;
// // // // console.log();


// // // // let str1 = "hello ";
// // // // let str2 = " sabir";

// // // // let str3 = str1+ str2;
// // // // console.log(str3);

// // // // console.log("1"+2);
// // // // console.log(1+"2");
// // // // console.log("1"+2+2);
// // // // console.log(1+2+"2");



// // // // let num1, num2, num3;

// // // // num1=num2=num3=2+2;
 
// // // // let gameCounter = 100
// // // // ++gameCounter;
// // // // console.log(gameCounter);


// // // // console.log("2">1);
// // // // console.log("02">1);


// // // // console.log(null>0);
// // // // console.log(null>0);
// // // // console.log(null>=0);


// // // console.log(null>0);

// // // // 2
// // // console.log(null==0);
// // // // 3
// // // console.log(null=0);
// // // // 4
// // // console.log(undefined==0);
// // // // 5
// // // console.log(undefined>0);
// // // // 6
// // // console.log(undefined<0);




// // // console.log(undefined>0);


// // // data types

// // const score =100;
// // const scoreValue =100.3;
// // const isLoggedIn = false;
// // const outsideTemp = null;
// // let userEmail ;
// // const id = Symbol('123')

// // const anothrId = Symbol('123')
// // console.log(id===anothrId);

// // const myName= "sabir";


// // let groceries=["apple","grapes", "dates","peach","onion","123","kevin"]

// // let  Ottp= {
// // name :"sabir",
// // age:23,
// // gender:"m",
// // isWeak:true,
// // }
    
// // console.log(typeof groceries);
// // console.log(typeof Ottp);
// // console.log(typeof myName);
//  let arrey=["pakistan", "iran","indonesia", "japan"];
//   const personHe={
//     name:"tbh",
//     age:33,
//     race:"black",
//     nationality:"persian",
//     istortured:true,
//   }
//   console.log(typeof arrey);
//   console.log(typeof personHe);
//   console.log(typeof personHe.age);
//   console.log(typeof personHe.istortured);

//   let pakistan={
//     province:4,
//     states:50,
//     isLiberal:true,
//     pm:"mss",
//     defence:"forces",
//   }

  
//   console.log(typeof pakistan.defence);
//   console.log(typeof pakistan.isLiberal);
//   console.log(typeof pakistan.states);
  
  // const score= 400;
  // console.log(score);
  // const balance = new Number(100);
  // console.log(balance);

  // console.log(balance.toString());
  
  // console.log(Math);

  // const gameName = new String('hitesh')
  // console.log(gameName.charAt(2));
  // console.log(gameName.indexOf('h'));
  
  // const min = 10
  // const max = 20
  // console.log(Math.floor(Math.random() * (max-min+1))+min)
  // let myDate = new Date()
  // console.log(myDate);
  // // console.log(myDate.toString());
  // console.log(myDate.toDateString());
  // console.log(myDate.toISOString());
  // console.log(myDate.toJSON());
  // console.log(myDate.toLocaleDateString());
  // console.log(myDate.toLocaleString());
  // console.log(myDate.toLocaleTimeString());
  // console.log(myDate.toUTCString());
  // console.log(myDate.getTimezoneOffset());
  // console.log(myDate.getTimezoneOffset());
  // console.log(myDate.getMonth());
  // console.log(myDate.getHours());
  // console.log(myDate.setMonth('6'));
  // console.log(myDate.setHours('8'));
  // console.log(myDate.getUTCHours());
  // console.log(myDate.getUTCMonth());
  // console.log(myDate.setUTCHours(9));
  // console.log(myDate.setUTCMonth(3));
  // console.log(myDate.getSeconds());
  // console.log(myDate.setSeconds('4'));
  // console.log(myDate.getUTCSeconds());
  // console.log(myDate.setUTCSeconds(9));
  // console.log(myDate.getMilliseconds());
  // console.log(myDate.setMilliseconds('6'));
  // console.log(myDate.getUTCMilliseconds());
  // console.log(myDate.setUTCMilliseconds('9'));
  // console.log(myDate.getFullYear());
  // console.log(myDate.getMinutes());
  // let myCreatedDate= new Date ("08-1-2025");
  // console.log(myCreatedDate.toLocaleString());
  // console.log(myCreatedDate.toTimeString());
  
  // let myCreatedDate = new Date (2023,0,23,5,3)
  // let myCreatedDate = new Date ("2023-01-14")
  // let myCreatedDate = new Date ("01-14-2023")
  // console.log(myCreatedDate.toDateString());
  // let myTimeStamps=Date.now()
  // console.log(myTimeStamps);
  // console.log(myCreatedDate.getTime());
  // console.log(Date.now()/1000);

  // let newDate = new Date()
  // console.log(newDate);
  // console.log(newDate.getMonth()+1);
  // console.log(newDate.getDay());
  
  // newDate.toLocaleString('default',{
  //   weekday:"long",
      
  // })
  
const marvel_heroes =['thor','ironman','spiderman']
const dc_heroes=['superman','flash','batman']
// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);
// console.log(marvel_heroes.includes('superman'))
// marvel_heroes.push('hulk')
// console.log(marvel_heroes);

const all_new_heroes=[...dc_heroes,...marvel_heroes]
// console.log(all_new_heroes);
const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity)
// console.log(real_another_array);
console.log(Array.isArray('hitesh'));
console.log(Array.from('hitesh'));
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));




  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
