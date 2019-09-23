import { getAllComputations, getComputationsByPage, getComputationsByWorkerAddress } from './controller'
import express from 'express'

const computationRoutes = express.Router()

computationRoutes.get('/', getAllComputations)
computationRoutes.get('/:pages/', getComputationsByPage)

export default computationRoutes
