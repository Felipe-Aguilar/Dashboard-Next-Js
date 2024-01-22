
import { WizardsResponse } from "@/wizards/interfaces/wizards-response";
import WizardGrid from "../wizards/components/WizardGrid";
import FavoriteWizards from "../wizards/components/FavoriteWizards";


export const metadata = {
    title: 'Favorites',
    description: 'Favorites Wizards',
};

const FavoritesPage = async () => {

    return ( 
        <div>

            <span className="h4">Listado de Magos favoritos <small className="text-primary">Global State</small></span>

            {/* <WizardGrid wizards={ [] }/> */}

            <FavoriteWizards />
        </div>
    );
}

export default FavoritesPage;