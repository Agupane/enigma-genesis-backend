import { getAllComputations } from './controller'
import express from 'express'

const computationRoutes = express.Router()

computationRoutes.get('/', getAllComputations)

export default computationRoutes
