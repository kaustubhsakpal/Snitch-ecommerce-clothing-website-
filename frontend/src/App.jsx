import React from 'react'
import { Provider } from 'react-redux';
import { store } from './store/app.store.js';
import Login from './pages/auth/features/login/login';


const App = () => {
  return (
    <>
    <Provider store={store}>
    <Login />
    </Provider>
    
    </>
  )
}

export default App