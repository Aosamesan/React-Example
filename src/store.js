import { createStore, combineReducers } from 'redux'
import { InitialState } from './constants'
import {colors, sort} from './reducers'

export const store = createStore(combineReducers({ colors, sort}),
    (localStorage['redux-store'] ? JSON.parse(localStorage['redux-store']) : InitialState))

store.subscribe(() => 
    localStorage['redux-store'] = JSON.stringify(store.getState())
)

store.subscribe(() => console.log("CurrentState : ", store.getState()))