import {BUY_BURGER} from "./burgerActionTypes";

//buy pizza
let buyBurger = () => {
    return {
        type: BUY_BURGER,
        payload: {
            info : "Purchase burger"
        }
    }
}
export {buyBurger};