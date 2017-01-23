import React from 'react'

const styles = {background: 'green', color: 'white', fontWeight: 'bold'}

const Notification = ({message, onClick}) => {
  if (!message) return null
  return (
    <div style={styles} onClick={onClick} >{message}</div>
  )
}

export default Notification
