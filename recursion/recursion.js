// let myfunc=function(){

//     myfunc();
// }

//1+2+3+....+n

// let total=0;
// let n=3;

// for(i=1;i<=n;i++){

//     total=total+i
// }

//loop take function a convert recursion akare korbo

// function sum(n){

// if(n===0){

//     return 0;
// }else{


//     return sum(n-1)+n;

// }

    
// }

// console.log(sum(10))

//but javascript a always recursioin ke avoid kora uchit


var n=10;
console.log((n*(n+1))/2)

function processs(i){

    console.log(i);
}

[1,2,3,4,5].forEach(function (i){


    processs(i);
})