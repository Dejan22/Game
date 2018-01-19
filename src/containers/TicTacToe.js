import React, { PureComponents } from 'react'
import { connect } from 'react-redux'
import Tile from '../components/games/Tile'
import '/TicTacToe.css'
import '../reducers/tictactoe'

class TicTacToe extends PureComponents {
  clickTile = (index) => {
    this.props.dispatch({
      type: 'TAKE_TITLE',
      payload: index
    })
  }

  renderTile = (value, index) => {
    return <Tile key={index} onClick={this.clickTile(index)} value={value} />
  }

  render () {
    return (
      <div className="TicTacToe">
        {this.props.game.map(this.renderTile)}
      </div>
    )
  }
}

const mapStateToProps = ({tictactoe}) => ({tictactoe})

export default connect(mapStateToProps)(TicTacToe)
