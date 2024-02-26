import os from 'os';

const interfaces = os.networkInterfaces();
let ipAddress;

for (const interfaceName in interfaces) {
    const theInterface = interfaces[interfaceName];
    for (const network of theInterface) {
        if (!network.internal && network.family === 'IPv4') {
            ipAddress = network.address;
            break;
        }
    }
    if (ipAddress) break;
}

if (!ipAddress) {
    console.error('No se pudo obtener la dirección IP de la máquina.');
    process.exit(1);
}

export const theIPAddress = ipAddress;
export const port = process.env.PORT || 3000;
