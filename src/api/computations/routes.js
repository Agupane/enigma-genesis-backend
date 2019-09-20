import { getAllComputations, getComputationsByPage, getComputationsByWorkerAddress } from './controller'
import express from 'express'

const computationRoutes = express.Router()

computationRoutes.get('/', getAllComputations)
computationRoutes.get('/:pages/', getComputationsByPage)
computationRoutes.get('/workers/pages/', getComputationsByWorkerAddress)

export default computationRoutes
