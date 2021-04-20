import HouseplantControls from "./BistroControls/BistroControls";
import HouseplantPreview from "./BistroPreview/BisstroPreview";
import classes from "./Bitro.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react"
import Modal from "../UI/Modal/Modal";
import OrderSummary from "./OrderSummary/OrderSummary";
import Button from "../UI/Button/Button";

const Bistro = ({history}) => {
    const prices = {
        Burger: 150,
        Kebab: 100

    }
    const [price, setPrice] = useState(0);
    const [pots, setPots] = useState({});
    const [ordering , setOrdering] = useState(false)
    useEffect(loadDefaults, []);
    
    function addPot(type) {
        const newPots = { ...pots };
        newPots[type]++;
        setPots(newPots);
        setPrice(price + prices[type]);
    };

    function removePot(type) {
        if (pots[type]) {
            const newPots = { ...pots };
            newPots[type]--;
            setPots(newPots);
            setPrice(price - prices[type]);
        }
    }
    function loadDefaults() {
        axios.get('https://streetfood-a34bf-default-rtdb.firebaseio.com/default.json')
            .then((response) => {
                setPrice(response.data.price);
                setPots(response.data.pots);
            });
    }
    function startOrdering() {
        setOrdering(true)
    }
    function stopOrdering() {
        setOrdering(false)
    }
    function finishOrdering() {
        axios.post('https://streetfood-a34bf-default-rtdb.firebaseio.com/default.json' ,{
            pots:pots,
            price:price,
            address:"fadfda",
            phone:"0 777 777 777",
            name:"Joah"
        })
        .then(()=> setOrdering(false));
        setOrdering(false);
        loadDefaults(false);
        history.push('/checkout');
    }
    return (
        <div>
            <h1 className={classes.H1}> Bistro </h1>
            <div className={classes.Bistro}>
                <HouseplantPreview pots={pots} price={price} />
                <HouseplantControls pots={pots} addPot={addPot} removePot={removePot} startOrdering={startOrdering} />
                <Modal show={ordering} cancel={stopOrdering}>
                    <OrderSummary pots={pots} price={price} />
                    <Button onClick={finishOrdering} green>Checkout</Button>
                    <Button onClick={stopOrdering}>Cancel</Button>
                </Modal>
            </div>
        </div>
    );
}

export default Bistro;