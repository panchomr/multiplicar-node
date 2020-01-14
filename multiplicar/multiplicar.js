// requireds
const fs = require('fs');


crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {


        if (!Number(base) || !Number(limite)) {
            reject(`El Valor introducido : ${base} no es un número`);
            return;
        }
        let data = ''

        for (let index = 1; index <= limite; index++) {
            data += (`${base} * ${index} = ${base * index}\n`);

        }

        fs.writeFile(`archivos/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${base}.txt`);
            console.log(`el archivo tabla-${base}.txt ha sido creado`);
        });
    });
}

let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject(`Los valores introducidos no son números.`);
            return;
        }
        let data = ''

        for (let index = 1; index <= limite; index++) {
            data += (`${base} * ${index} = ${base * index}\n`);

        }
        resolve(data);
    })

}


module.exports = {
    crearArchivo,
    listarTabla
}