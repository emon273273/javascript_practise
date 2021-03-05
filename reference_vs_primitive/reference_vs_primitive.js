// var a={

//     name:'sakib'
// };
// var b=a;
// a.name='tamim'
// console.log(a)
// console.log(b)


//array

// var a=['sakib','tamim']
// var b=a;
// a.push='mahmudullah'
// console.log(a)
// console.log(b)

//object ,array,function,date  eguli reference  ar eti heap structure follow kore jeta randomly memory te thake

//variable hosse primitive like string ,number, boolean, null, undefined ....eti stack data sturucture follow kore

 


// //referrence example

// var a=['sakib','tamim']

// var b=a;

// a[];
// console.log(a)// a er noutn arekta memory hbe but not uporr a change

// console.log(b)

//direct value copy korte chaile

// var language={

//     name:'javascript',
//     estd:'1995'

// }

// var language2=language; //ekhane direct value copy hosse but eta na chaile just jekono ektay notun kore kisu add korbo but porer tay modify hbe na se khetre  use korbo :
// // var language2={...language}

// language.faounder="brendon"
// console.log(language)
// console.log(language2)



///primitive wrapper type
// var a='sakib'
// console.log(a)
// var b=new String('sakib')
// console.log(b)

//pass by value  and pass by reference

// let a=1;

// let change=(val)=>{

//     val =2;
// }

// change(a);
// console.log(a) //ekrne pass korsi pass by reference  karon hisebe javascript amra jai pathabo function a sob e pass by reference hbe



let a={

    num:1
};

let change=(val)=>{

    val.num =2; //muted korlam  ar muted hoy tokhone jokhn pass by reference hoy
    

}

change(a);
console.log(a)