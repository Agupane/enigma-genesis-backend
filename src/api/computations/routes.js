import resource from 'resource-router-middleware'
import { getAllComputations } from './controller'

const computationRoutes = () =>
  resource({
    id: 'computation',
    load(req, id, callback) {
      console.log('load api')
    },
    /** GET / - List all entities */
    index({ params }, res) {
      getAllComputations()
        .then(result => {
          res.json(result)
        })
        .catch(error => {
          res.json(error)
        })
    }
  })

export default computationRoutes
