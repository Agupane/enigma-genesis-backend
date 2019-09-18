import resource from 'resource-router-middleware'
import Computation from '../../models/computation'
import { getAllWorkers } from './controller'

const workerRoutes = () =>
  resource({
    id: 'worker',
    load(req, id, callback) {
      console.log('load api')
    },
    /** GET / - List all entities */
    index({ params }, res) {
      getAllWorkers()
        .then(result => {
          res.json(result)
        })
        .catch(error => {
          res.json(error)
        })
    }
  })

export default workerRoutes
