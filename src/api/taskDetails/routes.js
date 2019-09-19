import express from 'express'
import { getTaskDetailById } from './controller'


const taskDetailRoutes = express.Router()

taskDetailRoutes.get('/:taskId', getTaskDetailById)

module.exports = taskDetailRoutes
