
// // // //object oreinted programming

// // // //method hosse object  er under kono function likhle seta method hisebe gonno hoy


// // // const product={

// // //     productname:'wheat',
// // //     productprice:50,
// // //     productquantity:6,
// // //     productisavailable:false
// // // }
// // // function Showproduct(productname,productprice,productquantity,productisavailable){


// // //     this.productname=productname
// // //     this.productprice=productprice
// // //     this.productquantity=productquantity
// // //     this.productisavailable=productisavailable
// // //     this.Showproduct=function(){


// // //         return `${this.productname} -${this.productprice}- ${this.productquantity} ${this.productisavailable}  `
// // //     }

// // // }




// // //math object

// // console.log(Math.random())
// // console.log(Math.floor(5.44))

// // console.log(Math.ceil(5.44))

// // console.log(Math.abs(-4.6))

// // console.log(Math.floor(Math.random()*11))


// //this keyword explain


// console.log(this)

// const product={

//     productname:'wheat',
//     productprice:50,
//     productquantity:6,
//     productisavailable:false,

//    showproductinfo (){

// return `${this.productname}  -${this.productprice} quantity -%{this.productquantity} -available  ${this.productisavailable}`

//     }
// }

// console.log(product.showproductinfo())

// //constractor function

// function Showproduct(productname,productprice,productquantity,productisavailable){

//     // //this indicate object created after calling of constructor function
//         this.productname=productname
//         this.productprice=productprice
//         this.productquantity=productquantity
//         this.productisavailable=productisavailable

//        this. showproductinfo=function (){

//             return `${this.productname}  -${this.productprice} quantity -%{this.productquantity} -available  ${this.productisavailable}`
            
//                 }
    
//     } 

// const product1=new Showproduct ('alo',60,7,false)
// console.log(product1)

// //javascript date object
// const date= new Date()
// console.log(date.toLocaleDateString())


// let birthday=new Date(1998,5,21)
// console.log(birthday)









