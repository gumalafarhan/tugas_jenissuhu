const readline = require("readline")
function farenheit(celcius) {
    console.log(`${celcius} derajat celcius = ${9/5*Number(celcius) + 32} derajat farenheit`);
}

function kelvin(celcius) {
    console.log(`${celcius} derajat celcius = ${Number(celcius) + 273.15} derajat kelvin`);
}

function reamur(celcius) {
    console.log(`${celcius} derajat celcius = ${4 / 5*Number(celcius)} derajat reamur`);
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("input suhu celcius : ", (celcius) => {
    farenheit(celcius);
    kelvin(celcius);
    reamur(celcius);
    rl.close()
})
// let celcius =90

