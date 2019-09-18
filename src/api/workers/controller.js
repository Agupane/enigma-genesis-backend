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
  let successfullyComputations = 0
  let totalCompletionTime = 0
  for (let computationIterator of computationsOfTheWorker) {
    const { completedOn, sentOn } = computationIterator
    if (completedOn) {
      successfullyComputations++
      if (sentOn) {
        const sentMoment = moment(sentOn)
        const completedMoment = moment(completedOn)
        const completionTime = completedMoment.diff(sentMoment)
        totalCompletionTime += completionTime
      } else {
        console.warn(`SentOn not defined for worker: ${workerAddress}`)
      }
    }
    computationIterator.completedOn ? successfullyComputations++ : failedComputations++
  }
  console.log('total completion time ', totalCompletionTime)
  console.log('total computations ', totalComputations)
  const avgResponseTime = totalCompletionTime / totalComputations
  const ethAddress = computationsOfTheWorker[0].sender
  return {
    ethAddress,
    avgResponseTime, // totalCompletionTime / totalComputations
    failedComputations,
    successfullyComputations
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
    console.log('Final workers data: ', workersData)
    return workersData
  } catch (error) {
    console.log('Error on getAllWorkers:', error)
  }
}
