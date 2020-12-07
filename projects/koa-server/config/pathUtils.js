const path = require('path')

const resolve = (dir) => {
    return path.join(__dirname, '..', dir)
}

const APP_PATH = resolve('src')
const DIST_PATH = resolve('dist')

module.exports = {APP_PATH, DIST_PATH, resolve}