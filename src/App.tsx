import React, { Component } from 'react'

import { Provider } from './store'

import Counter from './Counter'

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Counter />
        </div>
      </Provider>
    )
  }
}

export default App
