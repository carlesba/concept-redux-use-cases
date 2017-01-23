import React from 'react'
import './blocks.css'

const Blocks = ({onAddBlock, blocks, index, onSelectBlock}) => {
  return (
    <div>
      <div>
        <button onClick={onAddBlock}>Add Block</button>
      </div>
      {blocks.map((block, i) =>
        <Block
          key={i}
          value={block}
          index={i}
          isSelected={index === i}
          onSelect={() => onSelectBlock(i)}
        />
      )}
    </div>
  )
}

const Block = ({value, index, isSelected, onSelect}) => {
  const classes = isSelected
    ? 'block is-selected'
    : 'block'
  return (
    <div
      className={classes}
      onClick={onSelect}
      >{index}: {value}</div>
  )
}

export default Blocks
