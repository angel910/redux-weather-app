'use client';
import { combineReducers } from 'redux';
import forecastsListReducer from '../features/forecastsList/forecastsListSlice';
import searchInputReducer from '../features/searchInput/searchInputSlice';

const rootReducer = combineReducers({
	forecastsList: forecastsListReducer,
	searchInput: searchInputReducer
});

export default rootReducer;