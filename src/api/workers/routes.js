import { getAllWorkers } from './controller'
import express from 'express'

const workerRoutes = express.Router()

workerRoutes.get('/', getAllWorkers)

export default workerRoutes
