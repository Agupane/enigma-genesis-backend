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

export const getComputationsByPage = async (req, res, next) => {
  console.log('Geting all computations by page...')
  const { page, rowsPerPage, order, orderBy, workerAddress } = req.query
  console.log(`Rows per page: ${rowsPerPage}, page: ${page}, order column: ${order}, orderDirection: ${orderBy}, orderAddress: ${workerAddress}`)
  const rowsPerPageNum = parseInt(rowsPerPage)
  let results = []
  let totalRows = 0
  try {
    const sortOrder = order === 'desc' ? -1 : 1
    const findQuery = workerAddress ? { workerAddress } : {}
    const computations = await Computation.find(findQuery).sort([[ orderBy, sortOrder]]).skip(rowsPerPageNum*page).limit(rowsPerPageNum)
    totalRows = await Computation.count({})
    for (let computationIterator of computations) {
      const status = getTaskStatus(computationIterator)

      const newComputation = {
        ...computationIterator.toObject(),
        status
      }
      results.push(newComputation)
    }
  } catch (error) {
    console.log('Error on getComputationsByPage:', error)
    next(error)
  }
  res.json({
    totalRows,
    results
  })
}

