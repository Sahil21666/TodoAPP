import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { todosReducers } from './reducers/todosReducer';
import { tabReducer } from './reducers/tabReducer';



const middleware = [thunk];

const store = configureStore({
    reducer: {
        todos: todosReducers,
        currentTab: tabReducer
    },
   
}
)
composeWithDevTools(applyMiddleware(...middleware))

export default store;