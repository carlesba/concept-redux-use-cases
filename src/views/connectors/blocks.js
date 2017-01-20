import {connect} from 'react-redux'
import Blocks from '../components/editor'
import {getValues} from '../../data/selectors'

function mapStateToProps (state) {
  return {
    blocks: getValues(state)
  }
}

export default connect(mapStateToProps)(Blocks)
