// const month=3
// switch (month) {
//     case 1:
//         console.log("Jan");
//         break;
//     case 2:
//         console.log("feb");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     case 5:
//         console.log("May");
//         break;

//     default:
//         break;
// }
// const month5=5
// switch (month5) {
//     case 1:
//         console.log("Jan");
//         break;
//     case 2:
//         console.log("feb");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     case 5:
//         console.log("May");
//         break;

//     default:
//         break;
// }


// const myObject={
//     js:'javascript',
//     cpp:'c++',
//     py:'python',
//     rb:'ruby',
//     swift:'swift'
// }
// for (const key in myObject) {
//         // console.log(myObject[key]);
//         console.log(`${key} shortcut for ${myObject[key]}`);
        
        
    
// 

function num(num1=1){
    if (num1<=100) {
        console.log(num1);
        num(num1+1)
    }
    else{
        console.log("the value is greater than 100");
        
    }

 
}num()
