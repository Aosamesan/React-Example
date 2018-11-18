import {ActionTypes} from "./constants.js"

export const color = (state={}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_COLOR:
            return {
                id: action.id,
                title: action.title,
                color: action.color,
                rating: action.rating,
                timestamp: action.timestamp
            }
        case ActionTypes.RATE_COLOR:
            return (state.id !== action.id) ? state : {
                ...state,
                rating: action.rating
            }
        default:
            return state
    }
}

export const colors = (state=[], action) => {
    switch(action.type) {
        case ActionTypes.ADD_COLOR:
            return [
                ...state,
                color({}, action)
            ]
        case ActionTypes.RATE_COLOR:
            return state.map(c => color(c, action))
        case ActionTypes.REMOVE_COLOR:
            return state.filter(c => c.id !== action.id)
        default:
            return state
    }
}

export const sort = (state="SORT_BY_DATE", action) => action.sortBy || state