import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import {friendsReducer} from './reducer'
import mySaga from './saga'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
export const store = createStore(
  friendsReducer,
  applyMiddleware(sagaMiddleware)
)

// then run the saga
sagaMiddleware.run(mySaga)

// render the application
