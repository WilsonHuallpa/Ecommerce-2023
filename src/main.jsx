import React from 'react';
import ReactDOM from 'react-dom/client';
import { Ecommerce } from './Ecommerce';
import { BrowserRouter } from 'react-router-dom';
import './style.css'
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Ecommerce/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>

)
 

