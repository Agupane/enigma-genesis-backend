import resource from 'resource-router-middleware'
import Computation from '../../models/computation'

const computationRoutes = ({ config, db }) =>
  resource({
    id: 'computation',
    load(req, id, callback) {
      console.log('load api')
    },
    /** GET / - List all entities */
    index({ params }, res) {
      Computation.find({})
        .then(result => {
          res.json(result)
        })
        .catch(error => {
          res.json(error)
        })
    }
  })

export default computationRoutes
