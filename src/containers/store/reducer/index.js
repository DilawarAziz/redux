import { combineReducers } from "redux";
import reducer from "./app";
import auth from "./auth";





export default combineReducers({
    auth:auth,
    app :reducer 
})