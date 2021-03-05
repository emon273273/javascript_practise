// //rule
// // implict binding
// // explicit binding
// //new binding
// //window binding

// // var printplayername=function (name){

// //     console.log(name);
// // }

// // printplayername('sakib ')
// //////////////////////////////////////////////////////



// // var sakib={

// //     name:'sakib',
// //     age: 35,

// //  printplayername: function (){

// //         console.log(this.name);
// //     }
    
// // }

// // sakib.printplayername()

// // var printplayername=function(obj){


// //     obj.printplayer=function(){

// //         console.log(this.name);
// //     }
// // }

// // var sakib={
// //     name:'sakib',
// //        age: 35
    
// // }

// // var tamim={
// //     name:'tamim',
// //        age: 33
    
// // }

// // printplayername(sakib)

// // printplayername(tamim)
// // sakib.printplayer()

// // tamim.printplayer()

// ////////////////////////////////////

// var person=function (name,age)
// {

//     return{


//         name: name,
//         age:age,
//         printname: function ()
//         {

//             console.log(this.name)
//         },

//         father:{

//             name:'mr x',
//             printname:function(){

//                 console.log(this.name)
//             }
//         }
//     }
// }

// var sakib=person('sakib',35);
// sakib.printname()

// var tamim=person("tamim",33)
// tamim.printname()

// sakib.father.printname()

//sorasori call korte chaile

// var printname=function(v1,v2,v3){

//     console.log(`${this.name}is ${v1} and ${v2} and ${v3}`)
// }

// var sakib={

//     name:"sakib",
//     age: 35
// }


// var v1="handsome"
// var v2="allrounder"
// var v3="best player"


// printname.call(sakib,v1,v2,v3) //call er prothom perameter ta holo object nay othat ekahane amake this konta seta bole dite hosse. abond second perameter hisebe chaile arekta kaj korte pari ar seta hosse onnno kono kisu bind korte chaile seta perameter a dukabo call er
   

//abar call a ato perameter add korle complex hote pare tai onno eay te add korte hbe 



// var printname=function(v1,v2,v3){

//     console.log(`${this.name}is ${v1} and ${v2} and ${v3}`)
// }

// var sakib={

//     name:"sakib",
//     age: 35
// }


// var v1="handsome"
// var v2="allrounder"
// var v3="best player"

// var v=[v1,v2,v3]
// printname.apply(sakib,v) //apply call er motoi but eta array akare pathay 



// //bind




// var printname=function(v1,v2,v3){

//     console.log(`${this.name} is ${v1} and ${v2} and ${v3}`)
// }

// var sakib={

//     name:"sakib",
//     age: 35
// }


// var v1="handsome"
// var v2="allrounder"
// var v3="best player"


// var newfun=printname.bind(sakib,v1,v2,v3) //bind asole call er motoi but eta kisu return kore na just variable a jom rakhe

// newfun();


//new binding

// function person(name,age)
// {

//     this.name=name;
//     this.age=age;
//     console.log(`${name} is ${age}`)


// }

// var sakib= new person("sakib",35);


//window binding

// "use strict"  //eta use er fole printname() a ekhon undefined a error dekhabe 

// var printname= function()
// {

//     console.log(this.name)

// }
// var sakib={

//     name:'sakib'
// }

// printname() //kokono jdi this niye amon hoy je ai this ta kake dore bose ase setar confisuion thake tahole sekhane this take strict method er madhome strict kore rakha valo


// console.log(this===window) //true dibe
