import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import persistStore from 'redux-persist/es/persistStore'
//import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './root-reduser'
import rootSaga from './root-saga'


const sagaMiddleware = createSagaMiddleware()

//const middlewares = [thunk]
const middlewares = [sagaMiddleware]

if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

const store = createStore (rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

export default  store