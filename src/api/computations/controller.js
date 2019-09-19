import Computation from '../../models/computation'

export const getAllComputations = async () => {
  console.log('Geting all computations...')
  try {
    const computations = await Computation.find({})
    let results = []
    for (let computationIterator of computations) {
      const newComputation = {
        ...computationIterator.toObject(),
        success: computationIterator.completedOn ? true : false
      }
      results.push(newComputation)
    }
    return results
  } catch (error) {
    console.log('Error on getAllComputations:', error)
    throw error
  }
}
