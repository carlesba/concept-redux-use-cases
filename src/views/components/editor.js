import React from 'react'

const Editor = ({value, onChange}) => {
  return (
    <div>
      <input value={value}
        onChange={(evt) => onChange(evt.target.value)}
      />
    </div>
  )
}


export default Editor
