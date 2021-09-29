import {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {count: 0}
  OnIncrement = () => {
    this.setState(prevState => {
      return {count: prevState.count + 1}
    })
  }
  OnDecrement = () => {
    this.setState(prevState => {
      return {count: prevState.count - 1}
    })
  }
  OnClear = () => {
    this.setState(prevState => {
      return {count: (prevState.count = 0)}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">Counter</h1>
        <p className="count">{count}</p>
        <div className="button-container">
          <button className="button" onClick={this.OnIncrement}>
            Increase
          </button>
          <button className="clear" onClick={this.OnClear}>
            Clear
          </button>
          <button className="button" onClick={this.OnDecrement}>
            Decrease
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
