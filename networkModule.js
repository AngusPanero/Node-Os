const os = require("os");

const interfazNetwork = () => {
    const interfaces = os.networkInterfaces();
    const interfazData = {}

    for(const name in interfaces){
        interfazData[name] = interfaces[name].map((intFaz) => ({
            Familia: intFaz.family,
            Direccion: intFaz.address,
            Interno: intFaz.internal,
        }))
    }
    return interfazData;
};

console.log(interfazNetwork());

module.exports = interfazNetwork;

