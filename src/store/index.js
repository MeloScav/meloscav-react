import { configureStore } from '@reduxjs/toolkit'
import rootReducer from "/src/store/reducers";

const store = configureStore({ reducer: rootReducer() });

export default store;