// // // const processorder=(customer)=>{


// // //     console.log(`processing order for customer 1`)

// // // var currenttime=new Date().getTime()
// // // while(currenttime+3000>=new Date().getTime())

// // //     console.log(`order processed for customer 1`)

// // // }
// // // console.log(`take order for customer 1`);

// // // processorder();
// // // console.log(`completed order for customer 1`)




// // //upporer code a blocking method kaj korse fole jokhn ai loop a jay tokhn kono kaj user ke korte day na 

// // // blocking method dur korte chaile

// // // const processorder=(customer)=>{


// // //     console.log(`processing order for customer 1`);
// // //     setTimeout(()=>{

// // //         console.log("coking complete") //ai log ta print korar jonno 3 sec wait kore na fole dekha jay eta last a print hosse

// // //     },3000);
// // //     console.log(`order processed for customer 1`)

// // // }


// // // console.log(`take order for customer 1`);

// // // processorder();
// // // console.log(`completed order for customer 1`)

// // //ekhane subidha hosss amader looop use korte hosse na karon amra settime out namer functiion  a kaj korsi fole amra easily kaj korte parsi kono blocking sarai browser a abong user a speed o


// // //callback function er sothik bebohar kore kaj er order thik kora


// // // const takeorder=(customer,callback)=>{

// // // console.log(`take order for ${customer}`)
// // // //takeorder er kaj hoyar por process ta korber tai callback function use

// // // callback(customer);
// // // }


// // // const processorder=(customer,callback)=>{


// // //     console.log(`processing order for ${customer}`);
// // //     setTimeout(()=>{

// // //         console.log("coking complete") //
// // //         console.log(`order processed for ${customer}`)

// // //         callback(customer)
// // //     },3000);


  

// // // }







// // // const completeorder=(customer)=>{

// // //     console.log(` completed order for ${customer}`);
// // // }


// // // takeorder('customer 1',(customer)=>{
// // // processorder(customer,(customer)=>{

// // // completeorder(customer)

// // // });


// // // })


// // //ei call back er madhome puropuri amra amader process ke follow korsi jeta onek important


// // //tobe onek boro application othova  kono medium application eo dekha jay je call back korte thakle seta onek somossar karon hoye daray tai  er theke uttolon pete hole promises function use korbo


// //   //promise use
// // //    const hasmeeting=true;

// // const hasmeeting=false;
// //    const meeting =new Promise((resolve,reject)=>{


// //     if(!hasmeeting)
// //     {



// //         const meetingdetails={

// //             name:'tecnical metting',
// //             location:'google meet ',
// //             time:'10:00 PM'
// //         }
// //         resolve(meetingdetails);
// //     }
// //     else{

// //         reject(new Error("meeting already scheduled !"))}
// //    })



// //    const addtocalender=(meetingdetails)=>{



// //     const calender=`${meeetingdetails.name} has been sheduled on ${meetingdetails.location} at ${meetingdetails.time}`

// //     return Promise.resolve(calender);


// //    }

// // meeting
// // .then(addtocalender)
// // .then((result)=>{  //metting resoleve hoye asle

// // //resolvered data ta pabo

// // console.log(result)
// // })


// // .catch((error)=>{

// // //rejectied data pabo
// // console.log(error.message)

// // })

// // console.log("hello")


// //promise a jdi ak sathe kaj korate hoy

// const promise1=Promise.resolve(`promise 1 resolved`)
// const promise2= new Promise((resolve,reject)=>{
// setTimeout(() => {
//     resolve(`promise 2 resolved`)
// }, 2000);


// })


// //ekhn promise 2 ke wait na korate chaile
// Promise.all([promise1,promise2])
// .then(result=>{

// console.log(result)

// })

// //ekhn 2 sec pore result akbare dibe 


// // ekhn amra jdi asincronus a khaj na korte chai syncronyus way te kaj korte chai tahole

// function frindly(){

//     return `hello`
// }

// console.log(frindly())

//uporer function ti syncronus ekhon etake asincronus banate chaile


//   function frindly(){

//     return Promise.resolve(`hello`)
// }

// console.log(frindly())

//aro easy way


async function frindly(){

    return (`hello`)
}

console.log(frindly())