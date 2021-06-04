import {combineReducers, createStore} from "redux";
import {pizzaReducer} from "./pizza/pizzaReducer";
import {burgerReducer} from "./Burger/burgerReducer";

let rootReducer = combineReducers({
    pizza : pizzaReducer,
    burger: burgerReducer
});

let store = createStore(rootReducer);

export {store}