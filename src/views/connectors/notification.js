import {connect} from 'react-redux'
import Notification from '../components/notification'
import {closeNotification} from '../../data/domains/notification/actions'
import {getNotificationMessage} from '../../data/selectors'

function mapStateToProps (state) {
  return {
    message: getNotificationMessage(state)
  }
}

function mergeProps (stateProps, actions) {
  return {
    ...stateProps,
    onClick: () => actions.closeNotification()
  }
}

export default connect(mapStateToProps, {closeNotification}, mergeProps)(Notification)
