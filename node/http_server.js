const http=require('http') //loads the http module
http.createServer((request,response)=>{


    //tell the browser that everything is okey (status code 200) and the dara is in plain text 

    response.writeHead(200,{

        'content-type':'text/plain'
    });
    //write the announced text to the body of the page

    response.write('hello this is emonsab')

    //tell the browser that all of the response headers and body have been sent 

    response.end()
})

//tel the server whart port to be on

.listen(1500)