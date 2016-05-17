import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

//import configureStore from './store/configure-store';

import rootReducer from './reducers/index';
import App from './App';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
export const store = createStoreWithMiddleware(rootReducer);

export default class Launcher extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}
