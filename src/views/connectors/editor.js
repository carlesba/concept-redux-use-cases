import {connect} from 'react-redux'
import Editor from '../components/editor'
import {updateBlock} from '../../data/domains/actions'
import {getCurrentValue, getCurrentBlockIndex} from '../../data/selectors'

function mapStateToProps (state) {
  return {
    value: getCurrentValue(state),
    index: getCurrentBlockIndex(state)
  }
}

function mergeProps (props, actions) {
  return {
    value: props.value,
    onChange: (value) => actions.updateBlock(props.index, value)
  }
}

export default connect(mapStateToProps, {updateBlock}, mergeProps)(Editor)
