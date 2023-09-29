import { SimpleWizard } from "@/app/wizards/interfaces/simple-wizard";
import { WizardsResponse } from "@/app/wizards/interfaces/wizards-response";
import Image from "next/image";


const getWizards = async (): Promise<WizardsResponse[]> => {
    const data:WizardsResponse[] =  await fetch('https://hp-api.onrender.com/api/characters')
    .then(res => res.json());

    const wizards = data;

    return wizards;
}



const PokemonsPage = async () => {

    const wizards = await getWizards();

    return ( 
        <div className="d-flex flex-wrap gap-2">
            { wizards.map(wizard => (
                <Image 
                    key={wizard.id}
                    src={wizard.image ? wizard.image : 'https://ik.imagekit.io/hpapi/harry.jpg'}
                    width={120}
                    height={150}
                    alt="Wizard image"
                />
            ))

            }
        </div>
    );
}

export default PokemonsPage;