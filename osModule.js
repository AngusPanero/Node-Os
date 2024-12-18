const os = require("os");

const infoOS = () => { // Puedo hacer que la funcion me devulva un objeto con la data necesaria que tenga que traerme de os
    return {
        nombre: os.type(),
        tipo: os.platform(),
        version: os.version(),
        arquitectura: os.arch(),
        CPUs: os.cpus().length,
        memoriaTotal: (os.totalmem() / 1024 / 1024) + " MB",
        memoriaLibre: (os.freemem() / 1024 / 1024).toFixed(0) + " MB",
    }
};

console.log("Tipo:", infoOS());

module.exports = infoOS;