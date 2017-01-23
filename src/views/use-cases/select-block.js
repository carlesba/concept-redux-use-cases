import {setFocus} from '../../data/domains/focus/actions'
import {showNotification} from '../../data/domains/notification/actions'

export default function selectBlock (index) {
  return {
    type: 'SELECT_BLOCK',
    actions: [
      setFocus(index),
      showNotification('block added')
    ]
  }
}
