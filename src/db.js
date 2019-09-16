import mongoose from 'mongoose'
import config from './config/constants'
export default callback => {
  // connect to a database if needed, then pass it to `callback`:
  const mongoUri = config.mongo.host
  mongoose
    .connect(mongoUri)
    .then(result => {
      console.log('DB connection success!')
    })
    .catch(error => {
      console.error('unable to connect to database', error)
    })

  mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${mongoUri}`)
  })

  callback()
}
