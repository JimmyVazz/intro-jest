function sayHello(name){
    if(name === undefined){
        throw new Error('Agrega un nombre')
    }

    return `Hello, ${name}!`
}

module.exports = sayHello