import React, { Component } from 'react';
import './App.css';
import ColorList from './ColorList.js'
import SortList from './SortList'
import {sortColors, addColor, removeColor, rateColor} from './actioncreator'
import ColorSelector from './ColorSelector'

class App extends Component {
  constructor(props) {
    super(props)
    this.props.store.subscribe(() => this.setState(this.props.store.getState()))
    this.sortColors = this.sortColors.bind(this)
    this.addColor = this.addColor.bind(this)
    this.removeColor = this.removeColor.bind(this)
    this.rateColor = this.rateColor.bind(this)
  }

  componentWillMount() {
    this.setState(this.props.store.getState())
  }


  sortColors(sortMethod) {
    this.props.store.dispatch(sortColors(sortMethod))
  }

  addColor({color, title, rating}) {
    this.props.store.dispatch(addColor(title, color, rating))
  }

  removeColor(id) {
    this.props.store.dispatch(removeColor(id))
  }

  rateColor(id, rating) {
    this.props.store.dispatch(rateColor(id, rating))
  }


  render() {
    const {colors, sort} = this.state;

    return (
      <div className="App">
        <header>
          <h2>등록된 색</h2>
        </header>
        <article>
          <div className="Divide-Wrapper">
            <div className="Panel">
              <h3>Colors</h3>
              <div className="Scroll-Wrapper">
                <ColorList colors={colors} sort={sort} removeHandler={this.removeColor} rateHandler={this.rateColor}/>
              </div>
              <h3>정렬</h3>
              <SortList selected={sort} handler={this.sortColors} />
            </div>
            <div className="Panel">
              <h3>색 추가</h3>
              <ColorSelector handler={this.addColor}/>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default App;
