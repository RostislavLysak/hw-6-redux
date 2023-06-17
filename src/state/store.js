import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './root.reducer'

const logger = createLogger({
    collapsed: true
})

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

// store.subscribe(() => console.log(store.getState()))

export default store