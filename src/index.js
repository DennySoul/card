import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import routes from './routes';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const store = createStoreWithMiddleware(
    reducers,
    {},
    window.devToolsExtension ? window.devToolsExtension() : undefined
);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>
    , document.querySelector('.container'));
