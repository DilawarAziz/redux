import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
// import auth from './reducer/auth'
// import reducer from './reducer/app'
import combine from './reducer/index'
let store = createStore(combine,applyMiddleware(thunk))
export default store      