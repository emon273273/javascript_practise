// // // // // // var emon =14

// // // // // // function myfunction()

// // // // // // {

// // // // // //     var y=10
// // // // // //     console.log(`${emon} from myfunction`)



// // // // // // }
// // // // // // console.log(emon)
// // // // // // myfunction()


// // // // // // var sum=0;
// // // // // // for(i=0; i<12;i++)
// // // // // // {


// // // // // //     sum=sum+emon;



// // // // // // }
// // // // // // console.log(sum+'is emon')
// // // // // // var a=typeof(sum);
// // // // // // console.log(a)


// // // // // // let ab=1000
// // // // // // function emons()
// // // // // // {
 
// // // // // //     console.log(`${ab}`)

// // // // // // }
// // // // // // emons()
// // // // // // console.log(a)


// // // // // //Array 
// // // // // // var kk=[12,14,14,176,188]
// // // // // // console.log(kk)

// // // // // //ibject 

// // // // // // const product ={


// // // // // //     name: "potato",
// // // // // //     id: 32,
// // // // // //     price: 20

// // // // // // }


// // // // // // function show(product1)
// // // // // // {
// // // // // // // console.log(product1
// // // // // // //     )
// // // // // // const [product1]=product;
// // // // // // console.log(product1)

// // // // // // }

// // // // // // for(let year =2014;year<=2050;year++){

// // // // // //     let d=new Date(year,0,1);

// // // // // //     if(d.getDay()===0){

// // // // // //         console.log("1st january is being a sunday"+ year);

// // // // // //     }
// // // // // // }

// // // // // let num1=10;
// // // // //  let num2="10"
// // // // // console.log(num1== num2)
// // // // // let n=num1>100?true:false
// // // // // console.log(n)
// // // // // var k=typeof(+num2)
// // // // // console.log(k)

// // // // // //string properties and methods
// // // // //  const text ='  i love programming   ';

// // // // //  //finding length
// // // // //  console.log(text.length)

// // // // //  //finding elements
// // // // //  console.log(text[0])

// // // // //  //index berkorte chaile
// // // // //  console.log(text.indexOf('e'))

// // // // //  //check whetheir text is included or not 


// // // // //  console.log(text.includes('love'))
// // // // //  console.log(text.includes('emon'))

// // // // //  //remove space 

// // // // //  console.log(text.trimStart().length)
// // // // //  console.log(text.trimEnd().length)

// // // // //  console.log(text.trim())

// // // // //  //pulling out text

// // // // //  console.log(text.slice(0,9))
 
// // // // //  //concat methods
// // // // //  console.log(text.concat('!'))


// // // // //  //different part niye create arrays
// // // // //  console.log(text.split(' '))

// // // // //  //array properties

// // // // //  const array =['I','love','programming']
// // // // //  //finding length
// // // // //  console.log(array.length)

// // // // //  //accessing speceific elements

// // // // //  console.log(array[0])

// // // // //  //adding or remove element at the end of the array

// // // // //  console.log(array.push('emon'))
// // // // //  console.log(array)


// // // // // console.log(array.pop())

// // // // // //romve or add elements in the begeninng 

// // // // // console.log(array.unshift('emon'))
// // // // // console.log(array)
// // // // // console.log(array.shift())

// // // // // //accessing specific part of the array
// // // // // console.log(array.slice(0,2))
// // // // // console.log(array)
// // // // // //niddistho index theke niddisto index pojjonto array remove korte chailed

// // // // // //N:B: slice array arekta copy kore kaj korleo splice seta kore na splice() function direct delete kore fele


// // // // // console.log(array.splice(0,2,"emon")) //third argument array er first index a notun value add korte pare ar ai 3rd arugument mendatory na

// // // // // console.log(array)

// // // // // //spread operator is used in copping array object or part of the array object

// // // // // const arr1=['i','love','programming']
// // // // // const arr2=['we','love','webdevlopment']

// // // // // const arr3=[...arr1,'and',...arr2]
// // // // // console.log(arr3) 

// // // // // const product={

// // // // // productname: 'banana',
// // // // // productprice:20,
// // // // // productqunatity:3,

// // // // // productisavailable:true
// // // // // }

// // // // // const updateproduct={

// // // // //     ...product,
// // // // //     updatedkey:'value' 
// // // // // }


// // // // // console.log(updateproduct)

// // // // // //rest operator jeta index gulo akebare print kore

// // // // // const arr5=['i','love','programming']
// // // // // const arr6=['we','love','webdevlopment']
// // // // // // const[index1,index2,index3]=arr5;
// // // // // //console.log(index1,index2,index3)
// // // // // const[index1,...rest]=arr5
// // // // // console.log(index1,rest)


// // // // //for each loop


// // // // // const arr=['i','love','programming']
// // // // // arr.forEach(function(el,index,arr) //ekta function accept
// // // // // {


// // // // //     console.log(index,arr,el)
// // // // // })



// // // // //for of for of loop

// // // // // arr=['i','love','programming']
// // // // //  for(let el of arr)
// // // // //  {

// // // // // console.log(el)

// // // // //  }

// // // // //  //for in for loop (only use for object)
// // // // // const product={

// // // // // productname: 'banana',
// // // // // productprice:20,
// // // // // productqunatity:3,

// // // // // productisavailable:true
// // // // // }


// // // // // for(k in product)  //jokhn object niye kaj korbo tokhn of na likhe in likhbo
// // // // // {


// // // // //     console.log(product[k]) //ekhane k value guli nisse and seta product er seta ensure korse
// // // // // }




// // // // //reverse my name

// // // // // const name ='emon'
// // // // // function rev(name)
// // // // // {


// // // // //     console.log(name)
// // // // //     return name.split('').reverse().join('')
// // // // // }

// // // // // console.log(rev(name))





// // // // //first class function

// // // // // function func()
// // // // // {
// // // // // console.log('bla bla')

    
// // // // // }

// // // // // func()


// // // // // function outer()
// // // // // {

// // // // //     return function()
// // // // //     {


// // // // //         console.log("emon")
// // // // //     }
// // // // // }
// // // // // outer()() //akta function er modhe arekta function thakle seta ke ante chaile () () lagbe


// // // // // function outer(innerfunc)//higher order function
// // // // // {
// // // // // console.log(innerfunc())
    
// // // // // }
// // // // // outer(function(){

// // // // // console.log("this is function")


// // // // // })



// // // // //arrow function


// // // // // const funcname=()=>{

// // // // //     console.log('bla bla bla')
// // // // // }

// // // // // funcname()


// // // // // const funcname=()=> 'bla bla bla'


// // // // // console.log(funcname())



// // // // //javascript scope 

// // // // // const a=10;

// // // // // function outer()
// // // // // {

// // // // // console.log(a)
// // // // // const b=20


// // // // //  return function inner()
// // // // // {

// // // // //     console.log(b)
// // // // //     const c=30;
// // // // //    return function last()
// // // // //     {


// // // // //         console.log(c)
// // // // //         console.log(a)
// // // // //         console.log(b)

// // // // //         //javascript a function a sob value aceess kora jay
// // // // //     }
// // // // //    }
// // // // // }
// // // // // //N:B scope always nich theke upore khujbe
// // // // // outer()()()  

// // // // // {


// // // // //     let k=100;
// // // // // }
// // // // // console.log(k) //curly er vitorer man bire show hoy na
 

// // // // let k=100;

// // // // const array =[1,2,3]


// // // // function sum(arr){
// // // // let s=0;

// // // // if(!Array.isArray(arr)){
// // // // return 'please pass the array '



// // // // }
// // // // else{

// // // //     for(let num of array){

// // // //         s=num+s;
       
// // // //            }
       

// // // // }


// // // //     console.log(s);
// // // // }
// // // // sum(array);





// // // //statement vs expression
// // // //expression ekta result day onnodike statement like (if ) eguli condition check kore



// // // //function expression ao likha jay ex: const somewhat=function(){} 
// // // const somewhat=(function(){

// // //     return "hello"
// // // } ())
// // // console.log( somewhat) //ekhn eta expresion


// // //pass by value and pass by refereence
 
// // // const a=10
// // // function passbyvalue(a){


// // //     let b=a
// // // console.log(b)
// // //     b=20

// // //     console.log(b) // 
// // // }

// // // passbyvalue(a)
// // // console.log(a) //orginal value change hoy nai

// // // const obj={

// // //     num:10
// // // }

// // // function passbyref(obj)
// // // {

// // // console.log(obj)
// // // let b=obj;
// // // console.log(b)
// // // b.num=20
// // // console.log(b)

// // // }
// // // console.log(obj) //upore function a modification hoyse so akhn seta pete hole function call er pore seta declare korte hbe
// // // passbyref(obj)
// // // console.log(obj) //function call er pore 


// // //arrray helper methods

// // // const arr=['i','love','programming']

// //  //map-aray helper method 
// //  // works like regular looping function 
// //  // work with arrays
// //  // return a new array (with modified or without modified elements)
// //  // dont mutating (change) the orginal array


// // // const newarray=arr.map(function (el) {

// // //     // console.log(el)
// // //     return el.toUpperCase()



// // // })

// // // console.log(newarray)//notun array
// // // console.log(arr) //old array 

// // // //ai method kokhono ager array ke manupulate kore na 

// // // //programiing er porer index a kisu add korte chaile 

// // // const mappedarr=arr.map(function (el){


// // //     if(el==='programming'){

// // //         return el+'!'
// // //     }else{

// // //         return el;
// // //     }
// // // })

// // // console.log(mappedarr)


// // //filter method


// // //map er moto sob manbe

// // //return new array (based on some confidition)

// // //dont manupulate the orginal array


// // // const arr=['i','love','programming']

// // // const filterarray=arr.filter(function(el){


// // //     if(el.length>3){

// // //         return  el
// // //     }
// // // })

// // // console.log(filterarray)//ekane i er length 1 tai eta print hbe na


// // //find methods
// // //return a single value (based on some condition)

// // //dont change the orginal array



// // const arr=['i','love','programming']

// // const filterarray=arr.find(function(el){


// //     if(el.length>3){

// //         return  el
// //     }
// // })

// // console.log(filterarray)  //find er khetre single value return korbe always tai ekhane programming print korte pare nai condition sotto hoya sotteo

// // // but ekhon etar problem hosse porer index true hole seta print korbe na
// // // ekhn programming likha ta ber korte chaile 
// // const findarr=arr.filter(function(el){

// // if(el.includes('mm')){

// //    return el;
// // }

// // })

// // console.log(findarr)

// // //every 

// // //return true or false (bsed on some condition)
// // // dont change the orginal array
// //protita array er element er  manke condition a satisfy hote hbe naile hbe na



// // const arr=['i','love','programming']

// // let k=arr.every(function(el){


// //     return arr.toString
// // })
// // console.log(k)



// //some 
// ///ekhane protita element ke satisfy korte hbe na
// // const arr=['i','love','programming',23]

// // let k=arr.some(function(el){


// //     return typeof el==='number'
// // })
// // console.log(k)


// //array helper method -reduce

// //works like regular looping
// // work with arrays
// // return reduced value
// // dont change the orginal array

// //duita peramer nay abong loop akare kaj kore

// // const arr=['i','love','programming']

// // let k=arr.reduce(function(accumulator,current){


// //    console.log(accumulator,current) //accumulator initailize kore array [o] no index ke  so ans is accumulator =i ...then current er porer ta so current=love.... porer accumulator undefined dekhabe and porer current =programming evebe current agabe samnes


// //    return `${accumulator} ${current}` //ekhn dekho eta korar madhome amra ki pelam array er element guli soob ek hoye gelo
// // })
// // console.log(k)

// //amra chaile arekta value pass kore dite pari reduce method a fole dekha jabe intialize a sei value add hbe

// // const arr=['i','love','programming']

// // let k=arr.reduce(function(accumulator,current){


// //    console.log(accumulator,current) 


// //    return `${accumulator} ${current}` 
   
   
// //    //ekhn dekho eta korar madhome amra ki pelam array er element guli soob ek hoye gelo

   
// // },"we")
// // console.log(k)


// // //sum
// // const num=[10,20,30]

// // const sum=num.reduce(function(a,c){


// //    return a+c;
// // })

// // console.log((sum))


// //function argument object
//  //dynamically kisu add korte chaile




//  function sum(){

//    console.log(arguments)  //arguments hosse array like staructure but not array 

// //   const argsarr=Array.from(arguments) 
// //passing value ke array te convert korlam

// //arekta method
// const argsarr=[...arguments] //es 5 version avabe likhe


//   const total =argsarr.reduce((acc,cur)=>acc+cur)

//   return total;
//  }
// console.log(sum(1,2,4,5))

//normal method  a add korte chaile dynamically

// function sum(num1,...rest){


//    return rest.reduce((acc,curr)=>{

//       return acc+curr
//    },num1)
// }

// console.log(sum(12,13,14))


//factory function vs constructor function

// const product={

//     productnama:'wheat',
//     productprice:50,
//     productquantity:6,
//     productisavailable:false
// }
// function showproduct(productname,productprice,productquantity,productisavailable){

// return {
//     // productname:productname,
//     // productprice:productprice,productquantity:productquantity


//     //es6 a notun feature holo jdi property name and valuename same hoy tahole akbar likhlei hbe



//    productname,

//    productprice,
//     productquantity,
//     productisavailable
// }
// }

// console.log(showproduct('wheat',50,6,false))




//constacter function

//function er first letter boro hater hote hbe

 
//and ei function ke new function() a call kore hoy

// ai constructer function blue print kore

//abong funtion er vitore this namer kisu return korte hbe

// const product={

//     productnama:'wheat',
//     productprice:50,
//     productquantity:6,
//     productisavailable:false
// }
// function Showproduct(productname,productprice,productquantity,productisavailable){

// //this indilcate object created after calling of constructor function
//     this.productname=productname
//     this.productprice=productprice
//     this.productquantity=productquantity
//     this.productisavailable=productisavailable

// }


// const produc=new Showproduct('wheat',60,7,true);
//  console.log(produc)





