// function hello(){

//     console.log("hello world")

// }

//ekhn function je akta object eta proman korte chaile

hello.language='javascript'
console.log(hello.language)


//higher order function

function hello(){

    return function (){

        console.log("hello world")

    }
}

hello()()  //hello function ta higherorder






//example 1 without higher order function

// var num=[1,2,3];

// var result=[]
// for(let i=0;i<num.length;i++){

//     result.push(num[i]*2)
// }

// console.log(result)


//example 1 with higher order function


// var num=[1,2,3];

// var result= num.map(function(item){  //array.map main array ke change korse na

// return item*2;

// })

// console.log(result)

//example 2 without higher order

// var player=[

//     {
// name: 'sakib',
// avig:38.23

//     },

//     {

//         name:'tamim',
//         avg: 39.22
//     },

//     {

//         name:'mushfiq',
//         avg:36.22
//     },
//     {

//         name:'liton',
//         avg:38.34
//     }
// ]

// //jar avg 37 er upore take dakhte chai

// var playerwithavg37=[]
// for(i=0;i<player.length;i++){
// if(player[i].avg>=37){

//     playerwithavg37.push(player[i])
// }


// }

// console.log(playerwithavg37)



//example 2 with higher order

// var player=[

//     {
// name: 'sakib',
// avig:38.23

//     },

//     {

//         name:'tamim',
//         avg: 39.22
//     },

//     {

//         name:'mushfiq',
//         avg:36.22
//     },
//     {

//         name:'liton',
//         avg:38.34
//     }
// ]

// var playerwithavg37=player.filter((item)=>{
//     //array filter funtion ta prottekta object er jonno kaj korse.abong eti notun akta array toiri kore ager array ke change kore day na


// return item.avg>=37 //ain function just true or false return kore






// })

// console.log(playerwithavg37)


//chaile nijereao higher order function toiri korte parbo

const language=["javascript",'python','php','c']

//array.map nijera banabo


function mapemon(arr,fn){

    const newarray=[]


for(i=0;i<arr.length;i++){

    newarray.push(fn(arr[i]));


}

return newarray

}

//mapemon==array.map

const myarray=mapemon(language,function(language){

    return language.length
})

console.log(myarray)