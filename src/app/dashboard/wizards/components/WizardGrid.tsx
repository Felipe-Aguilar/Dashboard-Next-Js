
import { WizardsResponse } from "@/wizards/interfaces/wizards-response";
import WizardCard from "./PokemonCard";


interface Props {
    wizards: WizardsResponse[];
}


const WizardGrid = ({wizards} : Props) => {
    return ( 
        <div className="d-flex flex-wrap gap-2 mt-3">
            { wizards.map(wizard => (
                <WizardCard key={wizard.id} wizard={wizard}/>
            ))

            }
        </div>
    );
}

export default WizardGrid;