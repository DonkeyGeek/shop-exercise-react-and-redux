import { createStore, combineReducers, applyMiddleware } from 'redux'
import phoneReducer from './phone/reducerPhone'
import tvReducer from './tv/reducerTv'
import commentReducer  from './comments/reducerComments'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
    phone: phoneReducer,
    television: tvReducer,
    comments: commentReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;