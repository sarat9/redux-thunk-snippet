
/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * In this example, we use a `switch` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your
 * project.
 */

const initialState = { dataValue: 1, lastUpdate: 'Nothing' }

export default function Reducer (state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      console.log('Reducer => Increment')
      return Object.assign({}, state, {
        dataValue: state.dataValue + 1,
        lastUpdate: action.text
      })
    case 'DECREMENT':
      console.log('Reducer => Decrement')
      return Object.assign({}, state, {
        dataValue: state.dataValue - 1,
        lastUpdate: action.text
      })
    case 'ASYNCINCREMENT-WONT-WORK':
      console.log('Reducer => Async Increment WONT WORK')
      setTimeout(() => {
        return Object.assign({}, state, {
          dataValue: state.dataValue + 10,
          lastUpdate: action.text
        })
      }, 0)
      break
    default:
      console.log('Reducer => Default State')
      return state
  }
}
