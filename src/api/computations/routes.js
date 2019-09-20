import { getAllComputations, getComputationsByPage } from './controller'
import express from 'express'

const computationRoutes = express.Router()

computationRoutes.get('/', getAllComputations)
computationRoutes.get('/:pages/', getComputationsByPage)

export default computationRoutes
