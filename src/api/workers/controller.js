import { getAllComputations } from '../computations/controller'

export const getAllWorkers = async () => {
  console.log('Geting all workers...')
  try {
    const computations = await getAllComputations()
    console.log('computations to parse: ', computations)
  } catch (error) {
    console.log('Error on getAllWorkers:', error)
  }
}
