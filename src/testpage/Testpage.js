import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement, asyncIncrement, asyncIncrementWontWork } from '../redux/actions/actions'

function Testpage (props) {
  return (
    <div className='test-page'>
      <p>
        {props.playValue}
      </p>
      <p>
        {props.lastUpdate}
      </p>
      <button onClick={(event) => props.inc(event, 'Last Incremented')}>Increment</button>
      <button onClick={(event) => props.dec(event, 'Last Decremented')}>Decrement</button>
      <button onClick={(event) => props.asyncInc(event, 'Last Async Incremented')}>Async Increment</button>
      <button onClick={(event) => props.asyncIncWontWork(event, 'Async JUST REDUX wont Increment')}>Async Increment Won't Work</button>

    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  console.log('mapStateToProps => state : ', state)
  console.log('mapStateToProps => OwnProps : ', ownProps)
  return {
    playValue: state.dataValue,
    lastUpdate: state.lastUpdate
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log('mapDispatchToProps => OwnProps : ', ownProps)
  return {
    inc: (event, textData) => {
      event.preventDefault()
      dispatch(increment(textData))
    },
    dec: (event, textData) => {
      event.preventDefault()
      dispatch(decrement(textData))
    },
    asyncInc: (event, textData) => {
      event.preventDefault()
      dispatch(asyncIncrement(textData))
    },
    asyncIncWontWork: (event, textData) => {
      event.preventDefault()
      dispatch(asyncIncrementWontWork(textData))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Testpage)
