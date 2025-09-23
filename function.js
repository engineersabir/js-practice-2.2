// // // // // // // // sum finction
// // // // // // // function sum(a,b){
// // // // // // //     return a+b;
// // // // // // // }
// // // // // // // // multiplication function
// // // // // // // function mul(a,b){
// // // // // // //     return a*b;
// // // // // // // }
// // // // // // // // arrow function
// // // // // // // const arrowMul=(a,b)=>{
// // // // // // //     return a*c;
// // // // // // // };
// // // // // // // arrowMul=8;

// // // // // // // create a function using the "function" keyword that takes a string as an argument& returns the number of vowels in the strings.
// // // // // // let countVowels= function(){
// // // // // //     const string ="hello";
// // // // // //     console.log(string);
// // // // // // const vowelsCount=()=>{
// // // // // //     if(string.includes("a,e,i,o,u"))
// // // // // //         console.log(countVowels);
// // // // // // }
// // // // // // }
// // // // // // let arr=["abcdefghijklmnopqrstuvwxyz","not","one"]
// // // // // // arr.forEach((val)=>{
// // // // // //     console.log(val.toUpperCase());
// // // // // // });

// // // // // // // for a given array of numbers, print the square of each value using the forEach loop.
// // // // // // let num=[1,2,3,4,5]
// // // // // // num.forEach((val)=>{
// // // // // // console.log(val*val)
// // // // // // }) ;

// // // // //  let nums =[23,34,56];

// // // // //  let newArr=nums.map((val)=>{
// // // // //     return val*2;
// // // // //  })
// // // // //  console.log(newArr);

// // // // //  let calSquare=(num)=>{
// // // // //     console.log(num*num);
// // // // //  }

// // // // //  let arr=[1,2,3,4,5,6,7]
// // // // //  let evenArr=arr.filter((val)=>{
// // // // //     return val%2===0;
// // // // //  })
// // // // //  console.log(evenArr);
// // // // //console.clear();
// // // // // alert("hello");
// // // // // let headingsNum=document.getElementsById("heading-2");
// // // // // console.log(headingsNum);
// // // // // console.dir (headingsNum);
// // // // // let parahs=document.getElementsByTagName("p");
// // // // // console.dir(parahs);
// // // // // let elementsInDo=document.querySelector("p");
// // // // // console.dir(elementsInDo);
// // // // // let fruitSe=document.querySelector("div");
// // // // // console.dir(fruitSe);

// // // // // let createString=document.getElementsByTagName("h2").innerHTML="Hello JavaScript";
// // // // // console.log(createString);

// // // // //create 3 divs with the class name:"box",access them and add some unique text to each of them.

// // // // // let divs=document.querySelector(".box");
// // // // // console.log(divs);

// // // // let div=document.querySelector("div");
// // // // console.log(div);
// // // // let value=div.getAttribute("id");
// // // // console.log(value.getAttribute("box"));

// // // let newBtn=document.createElement("button");
// // // newBtn.innerText="click me  "
// // // console.log(newBtn);

// // // let div=document.querySelector("div");
// // // div.append(newBtn);

// // let newHeading=document.createElement("h1");
// // newHeading.innerHTML="<i> it is a div</i>";
// // document.querySelector("body").prepend(newHeading);
// let newBtn=document.createElement("button");
// newBtn.innerText="click me";
// newBtn.style.backgroundColor="red";
// newBtn.style.color="white";
// document.querySelector("body").prepend("button");


let para=document.querySelector("p");
console.log(para);
para.classList.add("newClass");