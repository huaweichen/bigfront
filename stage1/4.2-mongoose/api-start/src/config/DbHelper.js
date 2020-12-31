import mongoose from 'mongoose'
import config from './index'

// create connection
mongoose.connect(config.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// connection success
mongoose.connection.on('connected', () => {
    console.log('Mongoose connection established: ' + config.DB_URL)
})

// connection fail
mongoose.connection.on('error', (err) => {
    console.log('Mongoose connection failed: ' + err)
})

// disconnect
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected.')
})

export default mongoose