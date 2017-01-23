import {createStore, applyMiddleware} from 'redux'
import reducers from './data/reducers'
import createLogger from 'redux-logger'

const configureStore = () => {
  // const logger = createLogger({ collapsed: true })
  const logger = createLogger()
  const middlewares = applyMiddleware(logger)
  return createStore(reducers, middlewares)
}

export default configureStore
