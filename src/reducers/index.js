import { combineReducers } from 'redux'
import Addon from './AddonReducer'
import AddonLibrary from './AddonLibraryReducer'
import Drawers from './DrawersReducer'
import Accounts from './AccountReducer'
import Creations from './CreationReducer'
import {reducer as Notifications} from 'react-notification-system-redux';


export default combineReducers({
  Addon,
  AddonLibrary,
  Drawers,
  Accounts,
  Creations,
  Notifications
})
