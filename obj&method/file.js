// // const student={
// //     fullName:"sabir",
// //     marks:90,
// //     printMarks:function(){
// //         console.log("marks =",this.marks);
// //     }
// // }
// // console.log(student);
// const employee={
//     calcTax(){
//         console.log("tax rate is 89%")
//     },
// }

// const karanBhai={
//     salary:500,
// }


// const karanBhai2={
//     salary:500,
// }
// const karanBhai3={
//     salary:500,
// }
// const karanBhai4={
//     salary:500,
// };
// karanBhai.__proto__=employee;
// karanBhai3.__proto__=employee;
// karanBhai2.__proto__=employee;
// karanBhai4.__proto__=employee;

class toyotaCar{

    start(){
        console.log("start")
    }

    
    stop(){
        console.log("stop")
    }

    setBrand(){
        this.brandName=this.brand;
    }
}
let fortuner=new toyotaCar();
fortuner.setBrand("fortuner");
let lexus=new toyotaCar();
lexus.setBrand(lexus);