import CartCounter from "@/app/shopping-cart/components/CartCounter";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Shopping Cart',
    description: 'Un simple contador',
};

const CounterPage = () => {

    

    return ( 
        <>
            <h3>Page Counter</h3>

            <span>Productos en el carrito de compras</span>

            <CartCounter value={ 20 }/>
        </>
    );
}

export default CounterPage;