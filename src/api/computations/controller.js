import Computation from '../../models/computation'

export const getAllComputations = async () => {
  console.log('Geting all computations...')
  try {
    const computations = await Computation.find({})
    return computations
  } catch (error) {
    console.log('Error on getAllComputations:', error)
    throw error
  }
}
