import './_fonts.css';
import './constants.css';
import './index.css';

import { ConnectedRouter, connectRouter, routerMiddleware, RouterState } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AnyAction, applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { logger } from 'redux-logger';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const history = createBrowserHistory();

interface IState {
  router : RouterState
}

const countReducer = (state = 0, action : AnyAction) => 0;

const rootReducer = connectRouter(history)(combineReducers({count: countReducer}));

const store = createStore(rootReducer, compose(applyMiddleware(routerMiddleware(history), logger)));

ReactDOM.render(
  <Provider store={store}>
  <ConnectedRouter history={history}>
    <App/>
  </ConnectedRouter>
</Provider>, document.getElementById('root')as HTMLElement);
registerServiceWorker();
