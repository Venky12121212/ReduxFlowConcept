import React, {Fragment} from 'react';
import Pizza from '../Images/pizza.jpg'
import {useDispatch, useSelector} from "react-redux";
import {buyPizza} from "../redux/pizza/pizzaAction";
import {buyBurger} from "../redux/Burger/burgerAction";

let PizzaHut = () => {
    let dispatch = useDispatch()
    let pizzaInfo = useSelector((state) => {
        return state.pizza
    })
    let burgerInfo = useSelector((state) => {
        return state.burger;
    })
    let onClickBuyburger = () => {
        //trigger action to redux
        dispatch(buyBurger())
    }
    let onClickBuypizza = () => {
        //trigger action to redux
        dispatch(buyPizza())
    }
    return(
        <Fragment>
            <pre>{JSON.stringify(burgerInfo)}</pre>
            <div className='row'>
                <div className='col-md-6'>
                    <div className="card">
                        <div className="card-header text-white bg-danger">
                            <h3>PizzaHut</h3>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <img src={Pizza} className='img-fluid img-thumbnail'/>
                                </div>
                                <div className="col-md-6">
                                    <h2>Total : {pizzaInfo.pizzaCount}</h2>
                                    <button onClick={onClickBuypizza} className='bg-warning btn btn-sm text-white'>Buy Pizza</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header text-white bg-success">
                            <h3>BurgerHut</h3>
                        </div>
                        <div className="card-body">
                            <div className="row m-0">
                                <div className="col-md-6">
                                    <img src={Pizza} alt="burger" className='img-thumbnail img-fluid'/>
                                </div>
                                <div className="col-md-6">
                                    <h2>Total : {burgerInfo.burgerCount}</h2>
                                    <button onClick={onClickBuyburger} className='btn-sm btn bg-warning'>Buy Burger</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default PizzaHut