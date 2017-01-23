import React, {Component} from 'react'

class Editor extends Component {
  constructor (props) {
    super(props)
    this.state = {value: ''}
  }
  componentWillReceiveProps (nextProps) {
    this.setState({value: nextProps.value})
  }
  render () {
    return (
      <div>
        <input value={this.state.value}
          onChange={(evt) => this.props.onChange(evt.target.value)}
          disabled={this.props.disabled}
        />
      </div>
    )
  }
}

export default Editor
