'use client';

import { useAppSelector } from "@/store";
import WizardGrid from "./WizardGrid";
import { useEffect, useState } from "react";
import { BsHeart } from "react-icons/bs";

const FavoriteWizards = () => {

    const favoriteWizard = useAppSelector(state => Object.values( state.wizards.favorties ));
    const [wizards] = useState( favoriteWizard );


    return ( 
        // <WizardGrid wizards={ favoriteWizard }/>

        <>
            { favoriteWizard.length ?
                <WizardGrid wizards={ favoriteWizard }/>
            :
                <NoFavorites />
            }
        </>
    );
}



export const NoFavorites = () => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center" style={{height: '90vh'}}>
            <BsHeart className="text-danger h1" />
            <span>No hay favoritos</span>
        </div>
    )
}


export default FavoriteWizards;