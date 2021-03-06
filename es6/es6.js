








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

