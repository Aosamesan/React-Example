import React, {Component} from 'react'

export default class ColorSelector extends Component {
    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this)
    }

    submit(e) {
        e.preventDefault();
        let {_color, _title, _rating} = this.refs
        let color = _color.value, title = _title.value, rating = _rating.value * 1
        console.log(color, title, rating)
        this.props.handler({color, title, rating})
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <div className="Color-Selector">
                    <h4>색</h4>
                    <input type="color" defaultValue="#FF0000" ref="_color"/>
                    <h4>이름</h4>
                    <input type="text" defaultValue="새로 추가" ref="_title"/>
                    <h4>평가</h4>
                    <select defaultValue="1" ref="_rating">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <h4>추가</h4>
                    <button>추가</button>
                </div>
            </form>
        )
    }
}