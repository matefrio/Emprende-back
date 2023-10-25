require('dotenv').config()
const http = require("http")

function controldeRequerido() {
    console.log("Hola Mundo!")
}

const server = http.createServer(controldeRequerido)

const PORT = process.env.PORT

server.listen(PORT, function () {
    console.log("Aplicación corriendo en puerto: " + PORT)
})