// // // // // // async function getData(){
// // // // // //     const url="https://github.com/engineersabir";
// // // // // //     try{
// // // // // //         const response = await fetch(url);
// // // // // //         if(!response.ok){
// // // // // //             throw new Error(`response status:${response.status}`);

// // // // // //         }
// // // // // //         const result =await response.json();
// // // // // //         console.log(result);
// // // // // //     }catch(error){
// // // // // //         console.error(error.message);
// // // // // //     }
// // // // // // }
// // // // // const URL="https://cat-fact.herokuapp.com/facts";
// // // // // const factPara=document.querySelector("#fact");
// // // // // const btn=document.getElementById("btn");

// // // // // // let promise=fetch(URL);
// // // // // // console.log(promise);

// // // // // // const getFacts=async()=>{
// // // // // //     console.log("getting data.....");
// // // // // //     let response=await fetch(URL);
// // // // // //     console.log(response);
// // // // // //     let data=await response.json();
// // // // // //     factPara.innerText=data[0].text;
// // // // // // }


// // // // // function getFacts(){
// // // // //     fetch(URL)
// // // // //     .then((response)=>{
// // // // //         return response.json();
// // // // //     })
// // // // //     .then((data)=>{
// // // // //         console.log(data);
// // // // //         factPara.innerText=data[2].text;
// // // // //     })
// // // // // }


// // // // // btn.addEventListener('click',getFacts);

// // // // fetch('https:// reqres.in/api/users');

// // // // .then(res=>console.log(res))
// // // // // .then(data=>console.log(data));
// // // fetch('https://reqres.in/api/users')
// // // .then(res=>console.log(res));
// // fetch('https://reqres.in/api/users',{
// //     method:'POST',
// //     headers:{
// //         'content-type':'application/json'
// //     },
// //     body:JSON.stringify({
// //         name:'user !'
// //     })
// // }).then(res=>{
// //     return res.json()
// // })
// // .then(data=>console.log(data))

// .catch(error=>console.log('5esolve,reject)=>{
//         setTimeout(()=>{
//             resolve (455)
//         },37500);
//     })
// }

// async function main (){
// console.log("Loading modules")
// console.log("do something else")
// console.log("Load data");
// let data= await getData();
// console.log(data);
// console.log("process data");
// }


async function fetchData(){
    const userRes=await fetch('/api/user');
    const postRes=await fetch('/api/posts');
    const user=await userRes.json();
    const posts=await postRes.json();
    console.log(user,posts);
}