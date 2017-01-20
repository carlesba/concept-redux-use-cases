import React from 'react'

const Blocks = ({onAddBlock, blocks}) => {
  return (
    <div>
      <div>
        <button onClick={onAddBlock}>Add Block</button>
      </div>
      {blocks.map((block, i) => <div>{block}</div>)}
    </div>
  )
}

export default Blocks
