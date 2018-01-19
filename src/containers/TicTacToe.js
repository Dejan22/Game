import React, { PureCOmponents } from 'react'
import { connect } from 'react-redux'
import Tile from '../components/games/Tile'
import '/TicTacToe.css'
import '../reducers/tictactoe'

class TicTacToe extends PureCOmponents {
  takeTile = index => () {
    this.props.despatch({
      type: 'TAKE_TITLE'
      payload: index
    })
  }

  renderTile = (value, index) => {
    return <Tile key={index} onClick={ths.takeTile(index)} value={value} />
  }

  render () {
    return (
      <div className="TicTacToe">
        {this.props.game.map(this.renderTile)}
      </div>
    )
  }
}

const mapeStateToProps = ({tictactoe}) => ({tictactoe})

export default connect(mapStateToProps)(TicTacToe)
