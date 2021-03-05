// // // // // // // let person ={



// // // // // // // }

// // // // // // // person.name='emon'

// // // // // // // person.age=30;

// // // // // // // person.eat=function()
// // // // // // // {


// // // // // // //     console.log('person is eating')
// // // // // // // }

// // // // // // // person.sleep=function(){

// // // // // // //     console.log('person is sleeping')
// // // // // // // }




// // // // // // let p=function person(name,age)
// // // // // // {

// // // // // // let person ={



// // // // // // }

// // // // // // person.name=name

// // // // // // person.age=age

// // // // // // person.eat=function()
// // // // // // {


// // // // // //     console.log('person is eating')
// // // // // // }

// // // // // // person.sleep=function(){

// // // // // //     console.log('person is sleeping')
// // // // // // }

// // // // // // return person;
// // // // // // }


// // // // // // console.log(p('emon',21))

// // // // // // const khalid=p('khalid',36)

// // // // // // console.log(khalid)

// // // // // //ekhn common method guli alada vabe e rakhte chaile

// // // // // const personcomoon={
// // // // // eat() // common method
// // // // // {


// // // // //     console.log('person is eating')
// // // // // },

// // // // // sleep(){ //common method

// // // // //     console.log('person is sleeping')
// // // // // }

// // // // // }


// // // // // function person (name,age){


// // // // //     let person={}

// // // // //         person.name=name
// // // // //         person.age=age

// // // // //     person.eat=personcomoon.eat

// // // // //     person.sleep=personcomoon.sleep

// // // // //     return person;
// // // // // }

// // // // // const emon=person('emon',22)
// // // // // console.log(emon)


// // // // // //object.create functiion




// // // // // const captain={

// // // // //     name:'mashrafi',
// // // // //     age:35,
// // // // //     country:'banglades'

// // // // // }

// // // // // const player =Object.create(captain); //notun ekta object toiri holo jekhane captain er property guli ase othat javascript smart vabe detect korse arekta object ke fole subidha ki amra aro sohoje vitore kisu edit na kore kaj korte parbo

// // // // // console.log(player.name)

// // // // // console.log(player.age)


// // // //  const personcomoon={
// // // // eat() // common method
// // // // {


// // // //     console.log('person is eating')
// // // // },

// // // // sleep(){ //common method

// // // //     console.log('person is sleeping')
// // // // }

// // // // }


// // // // function person (name,age){


// // // //     // let person={}

// // // //     let person=Object.create(personcomoon)

 

// // // //         person.name=name
// // // //         person.age=age

// // // //         //object.create er fole kintu drkar nai asole niche person.eat=personcommon.eat bolar

// // // //     // person.eat=personcomoon.eat

// // // //     // person.sleep=personcomoon.sleep

// // // //     return person;
// // // // }
// // // // const sakib=person('sakib',22)
// // // // sakib.eat() //ekane kintu ekhn auto kaj korse object create er fole
 


// // // // //aro improve korte chaile built in kisu prototype ase jeguli diye aro sundor vabe code kora jay


// // // //prototype

// // // //simple function jeta object ke indicate kore



// // // // function test()
// // // // {


// // // // }
// // // // console.dir(test.prototype)




// // // //prototype use kore aro eay way te


// // // // function person (name,age)
// // // // {

// // // //     this.name=name;
// // // //     this.age=age;

// // // //     function contact(){

// // // //         console.log("he is banglade4si")
// // // //     }

// // // // }



// // // // person.prototype={


// // // //     eat()
// // // //     {

// // // //         console.log("person is eating")

// // // //     }
    
// // // // }



// // // // const emon=new person('emon',33)

// // // // emon.eat()
// // // // console.log(emon)

// // // // const khalid= new person('khalid',22)
// // // // console.log(khalid)



// // // //aro shohoj a korte chaile class based a and eta diye kaj korbo



// // // // class person {


// // // //     constructor (name,age){

// // // //         this.name=name;
// // // //         this.age=age;
// // // //     }




// // // //     eat()
// // // //     {

// // // //         console.log("person is eating")

// // // //     }



// // // // }

// // // // const emon= new person('emon',22)

// // // // console.log(emon)

// // // // emon.eat()




// // // //prototype inheritence

// // // // function person(name,age)
// // // // {

// // // //     this.name
// // // //     this.age


// // // // }

// // // // person.prototype={

// // // //     eat:function()
// // // //     {


// // // //         console.log(`${this.name} can eat`)
// // // //     }
// // // // }


// // // // const emon=new person("emon",22)

// // // // console.dir(emon)

// // // // emon.eat() 

// // // //nijera buit in functiion korte chaile

// // // // var f= function person ()
// // // // {}


// // // //     Object.prototype.emon=function() //master object a amar funtion dukiye dilam
// // // //     {


// // // //         console.log('i am emon')
// // // //     }



// // // // var p={


// // // // }
// // // // p.emon()
// // // // console.dir(p)








// // // function person(name,age)  //parent  class

// // // {

// // //     this.name= name;
// // //     this.age=age


// // // }
// // //  //uporer function ar nicher ta alada 
// // // function criketer(name,age,type,country) //subclass


// // // {
// // //   //upor er function ke amra call korbo

// // //   person.call(this) //ekane this hosse cricker function er this  ebong person. diye ager object ke amara add korlam
// // // this.name=name;
// // // this.age=age;

// // //     this.type=type;
// // //     this.country=country;


// // // }
// // // //uporer function and nicher tar modhe conneection korate chaile protopype inheritance er drkar




// // // person.prototype={

// // //     eat:function()
// // //     {


// // //         console.log(`${this.name} can eat`)
// // //     }
// // // }
// // //  criketer.prototype=Object.create(person.prototype) //cricker.prototype a person.prototype a ja ase sob inheritance kore niye aslo

// // //  criketer.prototype.constructor=criketer; //cricketer er constructor ke overwrite korte hbe naile kaj korobe na


// // //  let sakib= new criketer('sakib',22,'all','ban')

// // //  console.log(sakib)
// // //  console.dir(person)




// // //class syntax

// // class person { //parent class


// // constructor (name,age){


// //     this.name=name;
// // this.age=age;


// // }

// // eat(){

// //     console.log(`${this.name}is eating`)
// // }

// // }

// // class cricker extends person{ //sub class  ba child class

// //     //extends person likhlam karon uprer class ke sub class er sathe connnect korlam


// //     constructor(name,age,type,country)
// //     {

// // super(name,age); //uporer  constructor ke dhorlam
// //         this.name=name;
// //         this.age=age;
// //         this.type=type;
// //         this.country=country;


// //     }

// //     play(){

// //         console.log(`${this.name}can play`)
// //     }
// // }

// // let sakib=new cricker('sakib',35,'all','ban')
// // console.log(sakib)

// // sakib.play()







// // //getter and setter

// class person { 


//     constructor (name,age){
    
    
//         this.name=name; //property
//     this.age=age;
    
    
//     }
    
//     eat(){  //egula ke bola hoy class er method

    
//         console.log(`${this.name}is eating`)
//     }
    

//     //getter

//     get getname(){ // getname  kintu moteo function na eta property er moto behave korse and  amra jokhn call korbo like evabe sakib.getname not evave sakib.getname()

//         return this.name;
//     }


//     //setter 

//     set setname(name){ // barire theke kono property r internal kisu jdi ami change korte chai

// //etao kintu function na etao property r moto treat kore
//         this.name=name;
//     }
//     }


// let sakib= new person('sakib',35)


// console.log(sakib.getname)
// sakib.setname='tamim'
// console.log(sakib)


//static method

// class person { //parent class


// constructor (name,age){


//     this.name=name;
// this.age=age;


// }

// eat(){

//     console.log(`${this.name}is eating`)
// }



// static isequalage(){

//     console.log("hi  am static method")
// }
// }

// let sakib= new person('sakib',33)

// person.isequalage() //person class theke sorasori call kora jasse ai static method er madhome but sakib. er proyojon hossei na bola jay eta class er built in function not object er function


// ai static er madhome chaile object  o  pathano jay



// class person { //parent class


//     constructor (name,age){
    
    
//         this.name=name;
//     this.age=age;
    
    
//     }
    
//     eat(){
    
//         console.log(`${this.name}is eating`)
//     }
    
    
    
//     static isequalage(a,b){
    
//         return a.age===b.age
//     }
//     }
    
//     let sakib= new person('sakib',33)
//     let tamim=new person('tamim',30)
//     console.log(person.isequalage(sakib,tamim))





    //polymorphism

    //kono ekta child class jdi tar parent er kono property ke modify kore tokhn seta polymorphism





class person { //parent class


constructor (name,age){


    this.name=name;
this.age=age;


}

eat(){

    console.log(`${this.name}is eating`)
}

}

class cricker extends person{ //sub class  ba child class

    //extends person likhlam karon uprer class ke sub class er sathe connnect korlam


    constructor(name,age,type,country)
    {

super(name,age); //uporer  constructor ke dhorlam
        this.name=name;
        this.age=age;
        this.type=type;
        this.country=country;


    }

    play(){

        console.log(`${this.name}can play`)
    }


    eat(){ //notun kore eat ke child a modify korlam jeta parnet a onnno kisu silo


        console.log("emon can eat")
    }
}

let sakib=new cricker('sakib',35,'all','ban')
console.log(sakib)

sakib.play()
sakib.eat() 