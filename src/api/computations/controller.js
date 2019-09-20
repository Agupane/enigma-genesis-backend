import Computation from '../../models/computation'
import { getTaskStatus } from '../../utils/utils'
import moment from 'moment'

export const getAllComputations = async (req, res, next) => {
  console.log('Geting all computations...')
  let results = []
  try {
    const computations = await Computation.find({})
    for (let computationIterator of computations) {
      const status = getTaskStatus(computationIterator)

      const newComputation = {
        ...computationIterator.toObject(),
        status
      }
      results.push(newComputation)
    }
  } catch (error) {
    console.log('Error on getAllComputations:', error)
    next(error)
  }
  res.json(results)
}
