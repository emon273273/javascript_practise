// // // // var num1=10;
// // // // var num2=34;

// // // // function fun(){


// // // //     return num1+num2;
// // // // }

// // // // console.log(fun())  //perameter charai amra kaj korte parsi


// // // // var num1=10;

// // // // var sum=function(){
// // // //     var num2=34; //closure 
// // // //     return function(){


// // // //         return num1+num2;
// // // //     }
// // // // }

// // // // var myfunc=sum()

// // // // console.dir(myfunc)


// // // //more example

// // // function bankacc(initialbalance){
// // //   var balance=initialbalance
// // //   return function(){


// // //     return balance;
// // //   }

// // // }

// // // var account =bankacc(10000)

// // // console.log(account());

// // // console.dir(account)

// // // // ekhn amra jdi balance ke call kori dekha jabe  seta print hosse na er karon hosse ekhane eti private sompotti  child er but amra call korsi bire parent a theke  so etake fix korte chaile clouse er sahajjo nite hbe

// // // console.dir(account) //dekhbo eti closure a print korse abond amra protected way te dekhte parsi
// // // let emon=10;


// // // console.log(emon);



// // function init(){


// //   var name='emon'

// //   function display(){


// //   console.log(name);
  

// //   }

// //   return display
// // }
// // var myfunc=init();
// // myfunc()


// function makeadd(x){
//  return function(y){

//   return x+y;
//  }

// }

// var add5=makeadd(5)
// var add10=makeadd(10)

// console.log(add5(2))
// console.log(add10(2));

function apiFunction(url){


  fetch(url).then((res)=>{


    console.log(res);
  })
}

apiFunction('https://jsonplaceholder.typicode.com/todos/1')