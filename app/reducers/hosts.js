import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/host'

export default function hosts(state = [{
  id: 'id1',
  name: 'Default',
}], action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1
    case DECREMENT_COUNTER:
      return state - 1
    default:
      return state
  }
}
