
export function increment (text) {
  return { type: 'INCREMENT', text }
}

export function decrement (text) {
  return { type: 'DECREMENT', text }
}

export function asyncIncrement (text) {
  return function (dispatch) {
    setTimeout(() => {
      dispatch(increment('ASYNC INCREMENT'))
    }, 2000)
  }
}

export function asyncIncrementWontWork (text) {
  // // Tried with async await
  // let data = await new Promise(resolve => {
  //     setTimeout(() => {
  //         resolve({ type: 'INCREMENT', text })
  //     }, 2000)
  // })
  // console.log('returned ', data)

  // // Tried with promise
  // new Promise(resolve => {
  //     setTimeout(() => {
  //         resolve({ type: 'INCREMENT', text })
  //     }, 2000)
  // }).then(data => {
  //     return data
  // })

  // Tried with plain function
  setTimeout(() => {
    return { type: 'INCREMENT', text }
  }, 2000)
}
