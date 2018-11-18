import {ActionTypes} from './constants'
const md5 = require('md5')

export const addColor = (title, color, rating) => ({
    type: ActionTypes.ADD_COLOR,
    id: md5(title),
    title,
    color,
    rating,
    timestamp: new Date(),
})

export const removeColor = id => ({
    type: ActionTypes.REMOVE_COLOR,
    id
})

export const rateColor = (id, rating) => ({
    type: ActionTypes.RATE_COLOR,
    id,
    rating
})

export const sortColors = (sortBy) => ({
    type: ActionTypes.SORT_COLORS,
    sortBy
})