import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Tile from '../components/games/Tile'
import './TicTacToe.css'
import '../reducers/tictactoe'

class TicTacToe extends PureComponent {
  takeTile = index => () => {
    this.props.dispatch({
      type: 'TAKE_TILE',
      payload: index
    })
  }

  renderTile = (value, index) => {
    return <Tile key={index} onClick={this.takeTile(index)} value={value} />
  }

  render() {
    return (
      <div className="TicTacToe">
        {this.props.game.map(this.renderTile)}
      </div>
    )
  }
}

const mapStateToProps = ({ tictactoe }) => ({ tictactoe })

export default connect(mapStateToProps)(TicTacToe)
