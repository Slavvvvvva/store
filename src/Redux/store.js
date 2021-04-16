import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import persistStore from 'redux-persist/es/persistStore'


import rootReducer from './root-reduser'

const middlewares = [logger]

const store = createStore (rootReducer, applyMiddleware(...middlewares))
export const persistor = persistStore(store)

export default  store