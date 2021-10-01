import React from 'react'
import useHover from '../../hooks'
import './TileSelector.css'

const TileSelector = ({ numTiles, handleNumTileChange }) => {
  const [ref, hover] = useHover()
  const dropdown = (
    <div className='tileSelectorContent' ref={ref}>
      <div className='number' onClick={() => handleNumTileChange(4)}>4</div>
      <div className='number' onClick={() => handleNumTileChange(16)}>16</div>
      <div className='number' onClick={() => handleNumTileChange(36)}>36</div>
    </div>
  )

  return (
    <div className='tileSelector'>
      <div>Number of Tiles</div>
      <div className='tileSelectorDropdown'>
        {numTiles}
        {hover ? dropdown : null}
      </div>
    </div>
  )
}

export default TileSelector
