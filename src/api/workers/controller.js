import Computation from '../../models/computation'
import moment from 'moment'

const getAllWorkersAddressesByComputations = async () => {
  console.log('Getting all workers addresses...')
  try {
    const computations = await Computation.find().distinct('workerAddress')
    return computations
  } catch (error) {
    console.log('Error on getAllWorkersAddressesByComputations:', error)
    throw error
  }
}

const getWorkerDataFromWorkerAddress = async workerAddress => {
  const computationsOfTheWorker = await Computation.find({ workerAddress })
  const totalComputations = computationsOfTheWorker.length
  let failedComputations = 0
  let sucessfulComputations = 0
  let totalCompletionTimeForSuccessTasks = 0
  for (let computationIterator of computationsOfTheWorker) {
    const { completedOn, sentOn } = computationIterator
    // Successfully task
    if (completedOn) {
      const sentMoment = moment(sentOn)
      const completedMoment = moment(completedOn)
      const completionTime = completedMoment.diff(sentMoment)
      totalCompletionTimeForSuccessTasks += completionTime
      // Adds successfullyComputation
      sucessfulComputations++
    } else {
      // Task not completed
      failedComputations++
    }
  }
  const avgResponseTime = totalCompletionTimeForSuccessTasks / sucessfulComputations
  const ethAddress = computationsOfTheWorker[0].sender
  const percentSuccessfulComputations = sucessfulComputations * 100 / totalComputations
  return {
    ethAddress,
    avgResponseTime, // totalCompletionTime for successfully tasks / successfullyComputations
    failedComputations,
    sucessfulComputations,
    percentSuccessfulComputations,
    totalComputations,
    workerAddress
  }
}

export const getAllWorkers = async () => {
  console.log('Getting all workers...')
  try {
    const workerAddresses = await getAllWorkersAddressesByComputations()
    // Iterates over all the workers addresses and calculates: success, fail, completedNumbers, errorNumber, % fail, % success, avgResTime ( sumatory of completedOn-sentOn )
    const workersData = []
    for (let workerIterator of workerAddresses) {
      const newWorkerData = await getWorkerDataFromWorkerAddress(workerIterator)
      workersData.push(newWorkerData)
    }
    //  console.log('Final workers data: ', workersData)
    return workersData
  } catch (error) {
    console.log('Error on getAllWorkers:', error)
  }
}
