import React, { Component } from 'react'
import Blocks from './views/connectors/blocks'
import Editor from './views/connectors/editor'
import Notification from './views/connectors/notification'

class App extends Component {
  render () {
    return (
      <div>
        <Notification />
        <h1>Current Block</h1>
        <Editor />
        <h1>Other blocks</h1>
        <Blocks />
      </div>
    )
  }
}

export default App
