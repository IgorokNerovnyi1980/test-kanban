import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {HashRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';

ReactDOM.render(
    <Provider store={store}>
        <HashRouter basename="/">
            <Route component={App}/>
        </HashRouter>
    </Provider>,
    document.getElementById(
        'root'
    )
);
