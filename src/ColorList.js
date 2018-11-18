import React,{Component} from 'react'
import {SortComparer} from './constants'

export default class ColorList extends Component {
    render() {
        const {colors, sort, removeHandler, rateHandler} = this.props

        return (
            <table className="Color-List">
                <thead>
                    <tr>
                        <th>Color</th>
                        <th>Title</th>
                        <th>Rating</th>
                        <th>Timestamp</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                {colors.sort(SortComparer[sort]).map((e, i) => <ColorItem key={e.id} color={e} removeHandler={removeHandler} rateHandler={rateHandler}/>)}
                </tbody>
            </table>
        )
    }
}

class ColorItem extends Component {

    rate(id) {
        return e => {
            let {_rating} = this.refs
            let {rateHandler} = this.props
            rateHandler(id, _rating.value)
        }
    }

    render() {
        const {removeHandler} = this.props
        const {id, title, rating, color, timestamp} = this.props.color
        const d = new Date(timestamp)
        const {year, month, date} = {
            year: d.getFullYear(),
            month: d.getMonth() + 1,
            date: d.getDate()
        }

        return (
            <tr id={id}>
                <th>
                    <div className="Color" style={{backgroundColor:color}}></div>
                </th>
                <td>
                    <div className="Color-Title">
                        {title}
                    </div>
                </td>
                <td>
                    <div>
                        <select defaultValue={rating} ref="_rating">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <button onClick={this.rate(id)}>바꾸기</button>
                    </div>
                </td>
                <td>
                    <div className="Color-Date">
                        {year}-{month}-{date}
                    </div>
                </td>
                <td>
                    <button onClick={e => removeHandler(id)}>Remove</button>
                </td>
            </tr>
        )
    }
}