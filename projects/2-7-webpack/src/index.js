require('./index.scss')
const happy = require('./happy.jpg')
const logo = require('./logo.png')

console.log('hello webpack!')

function createImageElement(srcParam) {
    let img = document.createElement("img");
    img.src = srcParam
    return img
}

const div = document.createElement('div')
const happyImageElement = createImageElement(happy)
const logoImageElement = createImageElement(logo)

div.appendChild(happyImageElement)
div.appendChild(logoImageElement)

document.body.appendChild(div)
