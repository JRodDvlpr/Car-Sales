import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// REDUX
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { ReducerCar } from './reducers/index';

import 'bulma/css/bulma.css';
import './styles.scss';


const rootElement = document.getElementById('root');

const store = createStore(ReducerCar);

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, 
rootElement
);
