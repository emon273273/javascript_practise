// //fat arrow


// // let num=()=>{

// //     return 10;
// // }



// // console.log(num())


// //ternary operator

// // var age=10;
// // var type=(age>=18)?'adult':age<10?'child':'young'

// // console.log(type)


// //array.prototype find()

// //eti main array ke change kore na
// //protom elementhisebe curruentindex,array current value esob pay

// // var num=[1,2,3,4,5,6];
// // var result=num.find(function(current)

// // {
// // return current>5


// // })

// // console.log(result)

// //object a

// class student{

//     constructor(name,age)
//     {

//         this.name=name;
//         this.age=age;

//     }

//     test(){

//         console.log("hello")
//     }
//     examplefunction(){

//         let array=[1,2,3]
//         // array.find(function(){


//         //     this.test(); 

//         // },this) //ei this ta vitorer this ke pathasse baire

//         //tobe arrow function fue korle ar this pathano lagbe na

//         array.find(()=>{

//             this.test()
//         })

//     }
// }

// let student1 =new student("emon",21)


// student1.examplefunction()

//array.findindex

// var num=[1,2,3,4,5,6,7,8,9]
// var result=num.findIndex((currentvalue)=>{

//     // return !(currentvalue %2)
// return currentvalue>6

// })
// console.log(result) //index er  number disse


//array.fileters

//main array ke change kore na

// var num=[1,2,3,4,5,6,7,8,9]

// var result=num.filter((current)=>{

// return current>5

// })

// console.log(num)
// console.log(result)  //5 theke boro sob element passi


//array.splice()

//main array ke change kore fele



// var num=[1,2,3,4,5,6,7,8,9]

// var result=num.splice(1,2,10,12,13,19) //protom pera meter nay kon index theke start ,porer ta koto tuku pojonto delete and last a koto dur pojjonto add korbo



// console.log(num)


//array concat
// main array ke change kore na



// var num1=[1,2,3,4,5,6,7,8,9]
// var num2=[100,200,300,400,500]

// var result=num1.concat(num2)

// console.log(result)
// console.log(num2)
// console.log(num1)


//main array kintu thik ase


//array.map




//map onekta for loop er moto kaj kore

//notun array  return kore


// var num1=[1,2,3,4,5,6,7,8,9]

// var result=num1.map((num)=>{
//  return 2*num


// })

// console.log(result)

// console.log(num1)


// //array.reduce()

// //main array ke change kore na


// var num1=[1,2,3,4,5,6]

// var result=num1.reduce((previous,current)=>{ //ager value ke mone rakhe


//  return previous+current

// })

// console.log(result)

//loops

// for( let i=0;i<=8;i++){

//     console.log(i)
// }
// console.log(i)  //ei normal for loop kintu baire acess kore na karon let daoya jeta just ai loop ai kaj korbe

// ekhn loop a jdi let er jaygay var dei


// for( var i=0;i<=8;i++){

//         console.log(i)
//     }
//     console.log(i) //loop theke bair hoyar por kaj korbe


//for in
//object a kaj kore

// const myobj={

// name:'javascript',
// estd:'1995',
// founder:'brendan eich'

// }

// for(property in myobj){


//     console.log(property) //object er property gulo print korve not property er valus


// }


//for of
//eti jekono jaygay kaj korte pare like object array


// const myarr=[1,2,3,4,5]

// for(element of myarr){


//     console.log(element) // of use a value passi kintu for in a amra kintu just index pavo
// }
    
      
   //string a 
   
   // const mystring='i love javascript'
   // for(element of mystring){

   //  console.log(element)
   // }



//js object er unique feature





// const myobj={

// name:'javascript',
// estd:'1995',
// founder:'brendan eich'

// }

// //jsut key chaile

// var key=Object.keys(myobj)



// console.log(key) 

// //value gulo array akare chaile


// var vailues=Object.values(myobj)

// console.log(vailues)

// //key and value duita chaile

// var all=Object.entries(myobj)
// console.log(all)



//spread operator

// var num=[1,2,3,4]

// // var a=[num] //a num er referrerne value rakhse 

// var newnum=[...num,5,6,7]
// console.log(newnum)
// var a=[...newnum] //exact copy of numbers 
 
// console.log(a)

var myobj={

   x:1,
   y:2
}

var myobj1={

   a:1,
   b:2
}

console.log({...myobj,
             ...myobj1})













// // // // // //symbol in javascript
// // // // // var symbol1=Symbol()
// // // // // var symbol2=Symbol()

// // // // // console.log(symbol1===symbol2)

// // // // //false disse tahole boja jasse call hoyese aki name butt duibar dui jinish print hoyse mane duita ak na ekhn eta ke solve korte chaile


// // // // // var symbol1=Symbol('i am symbol 1') //sumbole with description
// // // // // var symbol2=Symbol('i am symbol 2')

// // // // // //ekhn buja jabe konta amar symbol 1 ar konta symbol 2

// // // // // console.log(symbol1 )

// // // // //symbol ta special type of function so etate constructor function buit in nei

// // // // //symbol hosse arekta new data type 

// // // // //symbole ke separate hise count korate na chaile


// // // // var symbol1=Symbol.for()
// // // // var symbol2=Symbol.for()

// // // // console.log(symbol1===symbol2)


// // // // //ekhn true dibe



// // // // var name= new String("emon")

// // // // console.log(name)


// // // //symbol and object a kaj korte hole

// // // // var cricket= Symbol.for('this is cricket symbol')
// // // // var object ={

// // // //     name: "sakib",
// // // //     [cricket]:'bangladesh' //ai third bracket diye ami value je upore seta bujalam

// // // // }


// // // // console.log(object)


// // // //normal bairer variable ke vitore object a thik rakhte
// // // var cricket="india"
// // // var object ={

// // //         name: "sakib",
// // //         [cricket]:'bangladesh' //ai third bracket diye ami value je upore seta bujalam
    
// // //     }
// // //     console.log(object)


// // //why do you need symbol

// // //eta hidden thake

// // var object={


// // }

// // object.name='javascript'
// // object.estd='1995'
// // //dynamically

// // object[Symbol('founder')]='brendan eich'
// // console.log(object)

// // //kintu for loop diye gele
// // for(let key in object)
// // {

// //     console.log(key) //founder kintu nai

// //     //orthat amra emon ekta property jeta loop  a chai na emon chaile symbol use kora jay

// // }


// // symbol er bivinno method ja symbole er prototype a thake


// // var title='javascript'
// // console.log(title.search('script'))


// // object a kaj korate chaile nijer moto kore symbole ke


// class product {


//     constructor(title)
//     {


//         this.title=title
//     }

//     [Symbol.search](string){

//         return string.indexOf(this.title)>=0?'found':'not'
//     }
// }

// var laptop= new product('laptop')

// console.log('hp laptop'.search(laptop))

