//pizza reducers
import {BUY_BURGER} from "./burgerActionTypes";

let initialState = {
    burgerCount: 75
}
let burgerReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_BURGER :
            return {
                ...state,
                burgerCount: state.burgerCount - 2
            };
        default : return state;
    };
};

export {burgerReducer}