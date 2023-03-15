// Write your code here
import './index.css'

import {Component} from 'react'

class EvenOddApp extends Component {
  state = {count: 0, even: true}

  increase = () => {
    this.setState(prev => {
      const num = Math.ceil(Math.random() * 100)
      const result = prev.count + num
      if (result % 2 === 0) {
        return {count: result, even: true}
      }
      return {count: result, even: false}
    })
  }

  render() {
    const {count, even} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">{`Count ${count}`}</h1>
        {even && <p className="para">Count is Even</p>}
        {!even && <p className="para">Count is Odd</p>}
        <button className="but" type="button" onClick={this.increase}>
          Increment
        </button>
        <p className="msg">Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
