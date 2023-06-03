const http = require("http");


//aqui se declara el servidor}
const server = http.createServer((request,response)=>{

    // Leer la request 

    // console.log(request.headers)


    const {url,method}= request
    if (method === "GET" && url === "/hola") {
        response.write("Estamos en el endpoint de hola")
        
    }
    if (method === "GET" && url === "/adios") {
        response.write("Estamos en el endpoint de adios")
        
    }
    if (method === "POST" && url === "/hola") {
        response.write("Estamos creando algo en hola")
    }
    // responder las request
    // response.write("Este es mi primer servidor");
    response.end()
})

//prender el servidor 

server.listen(8080,()=>{
    console.log("El servidor prendio")
})
