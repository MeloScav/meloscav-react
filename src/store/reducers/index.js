import { combineReducers } from "redux";
import layout from "/src/store/reducers/layout";

// Combine reducers (for the moment only one, layout)
const rootReducer = () => combineReducers({ layout });

export default rootReducer;