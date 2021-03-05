const getbuton=document.getElementById('get-button');
const sendbuton=document.getElementById('send-button')

const getdata=function(){
//request object toiri korbo

const xhr=new XMLHttpRequest();
//request 4 ta way te hoy
//get,post,put,delete esarao aro hosse options, head


xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1'); //open method call

xhr.send()//request send korlo

xhr.onload=function(){ //ei onload ta tokhn kaj korbe jokhn se response pabe

    const result = xhr.response;

    console.log(result)
    
}
}

const senddata=function(){



}

//button e click er por kaj korbo jevabe
getbuton.addEventListener("click",getdata);
sendbuton.addEventListener("click",senddata)
