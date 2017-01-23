import {connect} from 'react-redux'
import Blocks from '../components/blocks'
import {getValues, getFocusedIndex} from '../../data/selectors'
import {addBlock} from '../../data/domains/blocks/actions'
import {setFocus} from '../../data/domains/focus/actions'

function mapStateToProps (state) {
  return {
    blocks: getValues(state),
    index: getFocusedIndex(state)
  }
}

function mergeProps (stateProps, actions) {
  return {
    ...stateProps,
    onAddBlock: () => actions.addBlock(),
    onSelectBlock: (index) => actions.setFocus(index)
  }
}

export default connect(mapStateToProps, {addBlock, setFocus}, mergeProps)(Blocks)
