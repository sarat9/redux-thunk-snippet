import React from 'react'
import logo from './logo.svg'
import './App.css'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import Reducer from './redux/reducers/reducers'
import Testpage from './testpage/Testpage'
// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const store = createStore(Reducer, applyMiddleware(thunk))

function App () {
  console.log()
  return (
    <Provider store={store}>
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
          Sample Demo snippet for React, Redux, Redux-Thunk
          </p>
        </header>
        <Testpage />
      </div>
    </Provider>
  )
}

export default App
