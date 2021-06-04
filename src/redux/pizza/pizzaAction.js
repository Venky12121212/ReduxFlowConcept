import {BUY_PIZZA} from "./pizzaActionTypes";

//buy pizza
let buyPizza = () => {
    return {
        type: BUY_PIZZA,
        payload: {
            info : "Purchase pizza"
        }
    }
}
export {buyPizza};