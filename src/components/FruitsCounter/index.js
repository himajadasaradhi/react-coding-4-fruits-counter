// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangocount: 0, bananacount: 0}

  OnEatMango = () => {
    const {mangocount} = this.state
    this.setState(prevState => ({mangocount: prevState.mangocount + 1}))
  }

  OnEatBanana = () => {
    const {bananacount} = this.state
    this.setState(prevState => ({bananacount: prevState.bananacount + 1}))
  }

  render() {
    const {mangocount} = this.state
    const {bananacount} = this.state

    return (
      <div className="main-container">
        <div className="sub-container">
          <h1>
            Bob ate <span>{mangocount}</span> mangoes
            <span> {bananacount} </span>
            bananas
          </h1>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
              className="image"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
              className="image"
            />
          </div>
          <div>
            <button type="button" className="button" onClick={this.OnEatMango}>
              Eat Mango
            </button>
            <button type="button" className="button" onClick={this.OnEatBanana}>
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
