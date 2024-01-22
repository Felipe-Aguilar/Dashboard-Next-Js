'use client';

import { Provider } from "react-redux";
import { store } from './index';
import { useEffect } from "react";
import { setFavoriteWizards } from "./wizards/wizards";

interface Props {
    children: React.ReactNode;
}

const Providers = ({children}: Props) => {

    useEffect(()=>{
        const favorites = JSON.parse( localStorage.getItem('favorite-wizards') ?? '{}'); 

        store.dispatch( setFavoriteWizards(favorites) );
    });

    return ( 
        <Provider store={store}>
            {children}
        </Provider>
    );
}

export default Providers;