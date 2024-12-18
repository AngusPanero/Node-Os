const infoOS = require('./osModule');
const interfazNetwork = require('./networkModule');

const system = () => {
    console.log("Informacion de Sistema")
    console.log(infoOS())

    console.log("Información del Interfaz")
    
    const interfazNetworkData = interfazNetwork()
    
    for(const [key, value] of Object.entries(interfazNetworkData)){
        console.log(`
            
            ${key}`)
        value.forEach((detalles) => {
            console.log(`Familia: ${detalles.Familia}`)
            console.log(`Direccion: ${detalles.Direccion}`)
            console.log(`Interno: ${detalles.Interno}`)
        })
    }
    
}

system()