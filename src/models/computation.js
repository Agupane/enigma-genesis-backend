import mongoose from 'mongoose'
const Schema = mongoose.Schema

const computationSchema = new Schema({
  _id: {
    type: String,
    required: true
  },
  // SentOn
  SentOn:{
    type: Date,
    required: false
  },
  transactionHash: {
    type: String,
    required: true
  },
  scAdd: {
    type: String,
    required: true
  },
  msgId: {
    type: String,
    required: true
  },
  nonce: {
    type: String,
    required: true
  },
  sender: {
    type: String,
    required: true
  },
  workerAddress: {
    type: String,
    required: true
  },
  taskRecordGasUsed: {
    type: String,
    required: true
  },
  taskRecordBlockNumber: {
    type: Number,
    required: true
  },
  // Completed on
  completedOn: {
    type: Date,
    required: false
  },
  factorsFound: {
    type: Number,
    required: false
  },
  errorReportedOn:{
    type: Date,
    required: false
  },
  err: {
    type: String,
    required: false
  },
})

const Computation = mongoose.model('tasks', computationSchema)

export default Computation
