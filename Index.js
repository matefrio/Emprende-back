const http = require("http")

function controldeRequerido() {
    console.log("Hola Mundo!!!")
}

const server = http.createServer(controldeRequerido)
server.listen(4000)