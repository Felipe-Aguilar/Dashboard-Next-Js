
import { WizardsResponse } from "@/wizards/interfaces/wizards-response";
import WizardGrid from "./components/WizardGrid";


const getWizards = async (): Promise<WizardsResponse[]> => {
    const data:WizardsResponse[] =  await fetch('https://hp-api.onrender.com/api/characters')
    .then(res => res.json());

    const wizards = data;

    // throw new Error('Esto es un error que no debería de suceder');

    return wizards;
}



const PokemonsPage = async () => {

    const wizards = await getWizards();

    return ( 
        <div>

            <span className="h4">Listado de Magos <small className="text-primary">estático</small></span>

            <WizardGrid wizards={ wizards }/>
        </div>
    );
}

export default PokemonsPage;