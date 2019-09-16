import mongoose from 'mongoose'
const Schema = mongoose.Schema

const computationSchema = new Schema({
  taskId: {
    type: String,
    required: true
  },
  srcAdd: {
    type: String,
    required: true
  },
  workerAdd: {
    type: String,
    required: true
  },
  success: {
    type: Boolean,
    required: true
  },
  sentOn: {
    type: String,
    required: true
  },
  completedOn: {
    type: String,
    required: true
  }
})

const Computation = mongoose.model('Computation', computationSchema)

export default Computation
