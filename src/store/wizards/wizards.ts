import { SimpleWizard } from '@/wizards/interfaces/simple-wizard';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WizardsState {
    favorties : { [key: string]: SimpleWizard }, 
}

const getInitialState = () : WizardsState => {
    const favorites = JSON.parse( localStorage.getItem('favorite-wizards') ?? '{}'); 

    return favorites;
}

const initialState:WizardsState = {
    favorties: {},
    // '9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8': {id: '9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8', name: 'Harry Potter'},
    // '4c7e6819-a91a-45b2-a454-f931e4a7cce3': {id: '4c7e6819-a91a-45b2-a454-f931e4a7cce3', name: 'Hermione Granger'},
    // 'c3b1f9a5-b87b-48bf-b00d-95b093ea6390': {id: 'c3b1f9a5-b87b-48bf-b00d-95b093ea6390', name: 'Ron Weasley'},
}

const wizardsSlice = createSlice({
    name: 'wizards',
    initialState,
    reducers: {
        setFavoriteWizards(state, action) {
            state.favorties = action.payload;
        },

        toggleFavorite(state, action: PayloadAction<SimpleWizard>){
            const wizard = action.payload;
            const { id } = wizard;

            if (!!state.favorties[id]) {
                delete state.favorties[id];

                // return;
            }else {
                state.favorties[id] = wizard;
            }

            // Esto NO DEBE hacerse en Redux
            localStorage.setItem('favorites-wizards', JSON.stringify( state.favorties ));
        }
    }
});

export const { toggleFavorite, setFavoriteWizards } = wizardsSlice.actions;

export default wizardsSlice.reducer;