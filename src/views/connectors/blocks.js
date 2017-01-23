import {connect} from 'react-redux'
import Blocks from '../components/blocks'
import {getValues, getFocusedIndex} from '../../data/selectors'
import {addBlock} from '../../data/domains/blocks/actions'
import selectBlock from '../use-cases/select-block'

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
    onSelectBlock: (index) => actions.selectBlock(index)
  }
}

export default connect(mapStateToProps, {addBlock, selectBlock}, mergeProps)(Blocks)
