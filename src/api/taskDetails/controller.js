import Computation from '../../models/computation'

export const getTaskDetailById = async (req, res, next) => {
  const { taskId } = req.params
  console.log(`Getting task details by id: ${taskId}`)
  let taskDetail = null
  try {
    const result = await Computation.findOne({_id: taskId})
    console.log('RESULT ', result)
    taskDetail = {
      ...result.toObject()
    }
  } catch (error) {
    console.log('Error on getAllWorkers:', error)
    next(error)
  }
  res.json(taskDetail)
}
