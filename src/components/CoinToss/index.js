import {Component} from 'react'
import './index.css'

const HeadsImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TailsImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {tossImage: HeadsImage, heads: 0, tails: 0}

  tossCoin = () => {
    const randomValue = Math.floor(Math.random() * 2)
    if (randomValue === 0) {
      this.setState(prevState => ({
        tossImage: HeadsImage,
        heads: prevState.heads + 1,
      }))
    } else {
      this.setState(prevState => ({
        tossImage: TailsImage,
        tails: prevState.tails + 1,
      }))
    }
  }

  render() {
    const {tossImage, heads, tails} = this.state
    const total = heads + tails
    return (
      <div className="app-container">
        <div className="coinToss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="desc">Heads (or) Tails</p>
          <img src={tossImage} alt="toss result" className="toss-image" />
          <button type="button" className="toss-button" onClick={this.tossCoin}>
            Toss coin
          </button>
          <div className="results-container">
            <p className="count">Total: {total}</p>
            <p className="count">Heads: {heads}</p>
            <p className="count">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
