import React from 'react'
import './Board.css'
import Tile from '../Tile'

const Board = (props) => {
  const tiles = props.tiles.map((tile) => (<Tile {...tile} />))

  // const renderTiles = props.tiles.map((tile, i) => {
  //   return (
  //     <Tile tile={tile} key={i} />
  //   )
  // })

  const gridConfig = {
    gridTemplateColumns: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
    gridTemplateRows: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`
  }

  return (
    <div className='Board' style={gridConfig}>
      {tiles}
    </div>
  )
}

export default Board
