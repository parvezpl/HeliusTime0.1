
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import accountState from "./slices.js"


const rootReducer = combineReducers({
    account:accountState,
    // sothing:slices,
})


const store = configureStore({
    reducer: rootReducer,
})

export default store