import React, { Component } from 'react'

import { Provider } from './store'

import Count from './ContextCounter/Count'
import UpButton from './ContextCounter/UpButton'
import DownButton from './ContextCounter/DownButton'
import StateCounter from './StateCounter'
import EffectUserList from './EffectUserList'

class App extends Component {
  render() {
    return (
      <Provider>
        <div>
          <h2>Context Counter</h2>
          <Count />
          <UpButton num={3} />
          <DownButton num={2} />

          <Count />
        </div>

        <hr />

        <div>
          <h2>State Counter</h2>
          <StateCounter />
        </div>

        <hr />
        <div>
          <h2>EffectUserList</h2>
          <EffectUserList />
        </div>
      </Provider>
    )
  }
}

export default App
