'use client';

import { useState } from "react";

interface Props {
    value?: number;
}

const CartCounter = ({ value = 0 }: Props) => {

    const [counter, setCounter] = useState(value);

    return ( 
        <>
            <br/>
            <span className="h2">{counter}</span>

            <div className="d-flex gap-1 mt-2">
                <button className="btn btn-dark" onClick={()=>setCounter(counter+1)}>
                    +1
                </button>
                <button className="btn btn-dark" onClick={()=>setCounter(counter-1)}>
                    -1
                </button>
            </div>
        </>
    );
}

export default CartCounter;