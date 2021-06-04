//pizza reducers
import {BUY_PIZZA} from "./pizzaActionTypes";

let initialState = {
    pizzaCount: 150
}
let pizzaReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_PIZZA :
            return {
                ...state,
                pizzaCount: state.pizzaCount - 1
            };
        default : return state;
    };
};

export {pizzaReducer}