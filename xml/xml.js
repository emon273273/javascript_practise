const getbuton=document.getElementById('get-button');
const sendbuton=document.getElementById('send-button')


const sendrequest=function(method,url,data){


    const promise= new Promise((resolve,reject)=>{

        const xhr=new XMLHttpRequest();
        //request 4 ta way te hoy
        //get,post,put,delete esarao aro hosse options, head
        
        
        xhr.open(method,url); //open method call
        
        xhr.send(data)//request send korlo



        // xhr.setRequestHeader('Content-Type','application/json') //eta dara ami bujalam server er side ke je ami json file pathalam




        xhr.onload=function(){ 
        
        //ei onload ta tokhn kaj korbe jokhn se response pabe 
        

console.log(xhr.status)

if(xhr.status>=400){

    reject(xhr.response)
}
else{




            resolve(xhr.response)
}
        
        }
        
        xhr.onerror=function(){ //error er jonno catch korsi je nise oitar jonno

            reject("something was wrong")

        }
        
               
        
        
    })

    return promise
}










const getdata=function(){
sendrequest('GET',
 'https://jsonplaceholder.typicode.com/todos/1')
 .then(responsedata=>{

console.log(JSON.parse(responsedata))

 }).catch(err=>{

    console.log(err)
 })
}









const senddata=function(){

    sendrequest('POST',
    'https://jsonplaceholder.typicode.com/posts',JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }))
    .then(responsedata=>{
   
   console.log(JSON.parse(responsedata))
   
    })

}

//button e click er por kaj korbo jevabe
getbuton.addEventListener("click",getdata);
sendbuton.addEventListener("click",senddata)














// 'https://jsonplaceholder.typicode.com/todos/1'