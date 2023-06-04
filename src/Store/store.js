import { legacy_createStore as createStore } from "@reduxjs/toolkit";
import combineReducers from './Reducers/combine';
import { composeWithDevTools } from "redux-devtools-extension";
import {applyMiddleware} from 'redux';
import thunk from "redux-thunk";



const store=createStore(combineReducers,composeWithDevTools(applyMiddleware(thunk)));
export default store;