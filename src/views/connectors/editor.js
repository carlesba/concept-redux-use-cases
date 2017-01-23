import {connect} from 'react-redux'
import Editor from '../components/editor'
import {updateBlock} from '../../data/domains/blocks/actions'
import {getCurrentValue, getFocusedIndex} from '../../data/selectors'

function mapStateToProps (state) {
  return {
    value: getCurrentValue(state),
    index: getFocusedIndex(state)
  }
}

function mergeProps (stateProps, actions) {
  return {
    value: stateProps.value,
    onChange: (value) => actions.updateBlock(stateProps.index, value)
  }
}

export default connect(mapStateToProps, {updateBlock}, mergeProps)(Editor)
