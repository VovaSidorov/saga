import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import store from "./reduxStore/store"
import ConnectedApp from './Components/App/AppContainer'


ReactDOM.render(
    <Provider store={store}>
        <ConnectedApp />
    </Provider>,
    document.getElementById('root')
);