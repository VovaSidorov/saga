import createSagaMiddleware from "redux-saga";
import {applyMiddleware, createStore} from "redux";
import reducer from "./reducer";
import watchFetchDog from "./../Sagas/sagas"

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(watchFetchDog);

export default store;

