import React from 'react'

const Editor = ({value, onChange}) => {
  const disabled = value === undefined
  return (
    <div>
      <input value={value}
        onChange={(evt) => onChange(evt.target.value)}
        disabled={disabled}
      />
    </div>
  )
}

export default Editor
