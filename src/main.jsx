import React from 'react'
import ReactDOM from 'react-dom'
import { cart } from './redux/reducers.js'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { createStateSyncMiddleware, initMessageListener } from 'redux-state-sync'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

import ClothingStorePage from './ClothingStorePage'
import ShoppingCartPage from './ShoppingCartPage'
import NotFoundPage from './NotFoundPage'

const store = createStore(combineReducers({
  cart
}), applyMiddleware(createStateSyncMiddleware()))
initMessageListener(store)

const GlobalStyle = createGlobalStyle`
  :root {
    --2nd-font-color: hsl(0, 0%, 50%);
    --accent-color: hsl(180, 50%, 60%);
    --font-color: hsl(185, 75%, 35%);
    --main-shadow: 0rem 0rem 0.75rem 0.25rem lightgray;
  }
  body {
    font-family: 'Inter', Helvetica;
    margin: 0%;
    min-height: 100vh;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route element={<ClothingStorePage />} path='/'></Route>
          <Route element={<ShoppingCartPage />} path='/cart'></Route>
          <Route element={<NotFoundPage />} path='*'></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
