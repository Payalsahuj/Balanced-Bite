import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {reducer as ProductReducer} from "../Redux/ProductReducer/reducer"
import { reducer as RegisterReducer } from "./RegisterReducer/reducer";
import {reducer as CartReducer} from "./CartReducer/reducer"

const rootReducer = combineReducers({
  ProductReducer,
  RegisterReducer,
  CartReducer
  
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));