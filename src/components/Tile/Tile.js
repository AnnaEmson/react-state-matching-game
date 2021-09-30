import React from 'react'

import './Tile.css'

const Tile = ({ selected, matched, svg, color }) => {
  const colour = selected || matched ? { backgroundColor: color } : null
  return (
    <div className='Tile' style={colour}>
      {selected || matched ? <svg /> : null }
    </div>
  )
}

export default Tile
