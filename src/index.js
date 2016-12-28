import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Counter from './component/Counter'
import store from './store/store'


render(
  <Provider store={store()}>
    <Counter />
  </Provider>,
  document.getElementById('root')
)
