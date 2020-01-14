const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', options)
    .command('crear', 'Crea un archivo de texto con la tabla multiplicar', options)
    .help()
    .argv;


module.exports = {
    argv
}