import React, {Component} from 'react'
import {md5, SortMethods, SortTitles} from './constants'


export default class SortList extends Component {
    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this)
    }

    submit(e) {
        e.preventDefault()
        let { _sort } = this.refs
        let method = _sort.value
        let {handler} = this.props
        handler(method)
    }


    render() {
        const methodList = Object.keys(SortMethods)
        const {selected} = this.props
        
        return (
        <form onSubmit={this.submit}>
            <select className="Sort-Selector" ref="_sort" defaultValue={selected}>
                {methodList.map(e => <option value={e} key={md5(e)}>{SortTitles[e]}</option>)}
            </select>
            <button type="submit">정렬</button>
        </form>
        )
    }
}