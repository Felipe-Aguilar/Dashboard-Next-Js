'use client';

import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, initCounterState, substractOne } from "@/store/counter/counterSlice";
import { useEffect } from "react";

interface Props {
    value?: number;
}

const getApiCounter = async () => {
    const data = await fetch('/api/counter').then( res => res.json());

    return data;
}

const CartCounter = ({ value = 0 }: Props) => {

    // const [counter, setCounter] = useState(value);
    const counter = useAppSelector(state => state.counter.count);
    const dispatch = useAppDispatch();

    // useEffect(()=>{
    //     dispatch(initCounterState(value));
    // }, []);

    useEffect(()=>{
        getApiCounter()
        .then( ({ count }) => dispatch(initCounterState(count)) );
    }, [dispatch]);

    return ( 
        <>
            <br/>
            <span className="h2">{counter}</span>

            <div className="d-flex gap-1 mt-2">
                <button className="btn btn-dark" onClick={() => dispatch(addOne())}>
                    +1
                </button>
                <button className="btn btn-dark" onClick={()=> dispatch(substractOne())}>
                    -1
                </button>
            </div>
        </>
    );
}

export default CartCounter;