import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Tile from '../components/games/Tile'
import './GameBoard.css'
// import '../reducers/clickTile'
import { MARK_TILE } from '../actions/games/create_tile'

class GameBoard extends PureComponent {

  clickTile = (index) => {
    this.props.dispatch({
      type: MARK_TILE,
      payload: index
    })
  }

  renderTile = (value, index) => {
    return <Tile key={index} onClick={this.clickTile(index)} value={value} />
  }

  render() {
    return (
      <div className="TicTacToe">
        {this.props.game.map(this.renderTile)}
      </div>
    )
  }
}

const mapStateToProps = ({ gameboard }) => ({ gameboard })

export default connect(mapStateToProps)(GameBoard)
