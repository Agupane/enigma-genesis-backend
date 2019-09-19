import Computation from '../../models/computation'
import moment from 'moment'
import { getTaskStatus } from '../../utils/utils'

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
  let successfulComputations = 0
  let pendingComputations = 0
  let totalCompletionTimeForSuccessTasks = 0
  for (let computationIterator of computationsOfTheWorker) {
    const { completedOn, sentOn } = computationIterator
    const taskStatus = getTaskStatus(computationIterator)
    // Successfully task
    switch(taskStatus) {
      case 'Completed': {
        const sentMoment = moment(sentOn)
        const completedMoment = moment(completedOn)
        const completionTime = completedMoment.diff(sentMoment)
        totalCompletionTimeForSuccessTasks += completionTime
        // Adds successfullyComputation
        successfulComputations++
        break
      }
      case 'Pending': {
        // Task not completed (pending task)
        pendingComputations++
        break
      }
      case 'Error': {
        // Task completed with error
        failedComputations++
        break
      }
    }
  }
  const avgResponseTime = totalCompletionTimeForSuccessTasks / successfulComputations
  const ethAddress = computationsOfTheWorker[0].sender
  const percentSuccessfulComputations = (successfulComputations * 100) / totalComputations
  return {
    ethAddress,
    avgResponseTime,
    failedComputations,
    successfulComputations,
    pendingComputations,
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
