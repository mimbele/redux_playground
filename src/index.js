import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import counterReducer from './store/reducers/counter'
import resultsReducer from './store/reducers/results'

const reducers = combineReducers({
    ctr: counterReducer,
    rst: resultsReducer
})

const store = createStore(reducers)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
