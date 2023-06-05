const http = require("http");

const routes = {
    "/hola": {
        GET: "Estamos en el endpoint de hola",
        POST: "Estamos creando algo en hola",
        PUT: "Estamos sustituyendo algo en hola",
        PATCH: "Estamos parcheando algo en hola",
        DELETE: "Estamos borrando en hola"
    },
    "/adios": {
        GET: "Estamos en el endpoint de adios",
        POST: "Estamos posteando en adios",
        PUT: "Estamos sustituyendo en adios",
        PATCH: "Estamos parchando algo en adios",
        DELETE: "Estamos borrando en adios"
    }
};

const newServer = http.createServer((request,response) => {
    const {url,method}= request;
    if (routes[url] && routes[url][method]) {
        response.write(routes[url][method]);
    }else {
        response.write("no existe el nodo al que quieres acceder")
    }
    response.end
})

// const server = http.createServer((request,response)=>{

//     const {url,method}= request
//     if (method === "GET" && url === "/hola") {
//         response.write("Estamos en el endpoint de hola")
//     }
//     if (method === "POST" && url === "/hola") {
//         response.write("Estamos creando algo en hola")
//     }
//     if (method === "PUT" && url === "/hola") {
//         response.write("Estamos sustituyendo algo en hola")
//     }
//     if (method === "PATCH" && url === "/hola") {
//         response.write("Estamos parcheando algo en hola")
//     }
//     if (method === "DELETE" && url === "/hola") {
//         response.write("Estamos borrando en hola")
//     }
    
//     if (method === "GET" && url === "/adios") {
//         response.write("Estamos en el endpoint de adios")
//     }
//     if (method === "POST" && url === "/adios") {
//         response.write("Estamos posteando en adios")
//     }
//     if (method === "PUT" && url === "/adios") {
//         response.write("Estamos sustituyendo en adios")
//     }
//     if (method === "PATCH" && url === "/adios") {
//         response.write("Estamos parchando algo en adios")
//     }
//     if (method === "DELETE" && url === "/adios") {
//         response.write("Estamos borrando en adios")
//     }
    
//     // responder las request
//     // response.write("Este es mi primer servidor");
//     response.end()
// })


//prender el servidor 
newServer.listen(8080,()=>{
    console.log("El servidor prendio")
})


// Tarea 1:terminar todos los metodos de CRUD con la ruta /hola y /adios
// Tarea 2 : cambiar los if´s con estructura de datos