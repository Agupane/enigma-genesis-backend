import Computation from '../../models/computation'
import { getTaskStatus } from '../../utils/utils'
import moment from 'moment'

export const getAllComputations = async () => {
  console.log('Geting all computations...')
  try {
    const computations = await Computation.find({})
    let results = []
    for (let computationIterator of computations) {
      const { sentOn, completedOn, errorReportedOn } = computationIterator
      const sentMoment = moment(sentOn)
      const completedMoment = moment(completedOn)
      const completionTime = completedMoment.diff(sentMoment)
      const status = getTaskStatus(computationIterator)

      const newComputation = {
        ...computationIterator.toObject()
      }
      results.push(newComputation)
    }
    return results
  } catch (error) {
    console.log('Error on getAllComputations:', error)
    throw error
  }
}
