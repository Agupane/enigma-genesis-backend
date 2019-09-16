import Joi from 'joi'
import dotEnv from 'dotenv'

// require and configure dotenv, will load vars in .env in PROCESS.ENV
dotEnv.config()

// define validation for all the env vars
const envVarsSchema = Joi.object({
  MONGO_HOST: Joi.string()
    .required()
    .description('Mongo DB host url'),
  MONGO_PORT: Joi.number().default(27017),
  MONGO_DATABASE: Joi.string()
    .required()
    .description('Mongo database name')
})
  .unknown()
  .required()

const { error, value: envVars } = Joi.validate(process.env, envVarsSchema)
if (error) {
  throw new Error(`Config validation error: ${error.message}`)
}

const config = {
  mongo: {
    host: `${envVars.MONGO_HOST}${envVars.MONGO_DATABASE}`,
    database: envVars.MONGO_DATABASE,
    port: envVars.MONGO_PORT
  }
}

export default config
