import './App.css';
import { createStore, applyMiddleware, compose } from 'redux'
import React from "react"
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from "./state/reducer"
import Cats from "./components/Cats"


let store
export const resetStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
}
resetStore()
export default function App() {    
  return (
    <Provider store = {store}>
        <h1>Cat Facts!</h1>
        <Cats/>
    </Provider>
  );
}