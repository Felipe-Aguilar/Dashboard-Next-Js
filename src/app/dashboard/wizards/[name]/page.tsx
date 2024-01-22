import { Wizard } from "@/wizards/interfaces/wizard";
import { Metadata } from 'next';
import Image from "next/image";
import style from '../../style.module.scss';
import { notFound } from "next/navigation";
import { WizardsResponse } from "@/wizards/interfaces/wizards-response";
import { FaHatWizard } from "react-icons/fa";

interface Props {
    params: { id: string };
}

// Solo se va a ejecutar en BuiltTime
export async function generateStaticParams(){

    const idWizard:WizardsResponse[] = await fetch('https://hp-api.onrender.com/api/characters')
    .then(response => response.json());

    
    return idWizard.map(wizard => ({
        name: wizard.id
    }))
}


export async function generateMetadata({params}:Props):Promise<Metadata>{

    const {id, name} = await getWizard(params.id);

    return{
        title: `${name} - #${id}`,
        description: `Página del mago ${name}`
    }
}

const getWizard = async (id: string):Promise<Wizard> => {

    try {
        const wizard = await fetch(`https://hp-api.onrender.com/api/character/${id}`,{
            next: {
                revalidate: 60 * 60 * 30 * 6            
            }
        }).then(response => response.json());
    
        return wizard[0];
        
    } catch (error) {
        notFound();
    }

    
}

const WizardPage = async ({ params } : Props) => {
    
    const wizard = await getWizard(params.id);

    return ( 
        <div className={style.infoWizard}>
            <div className={style.body}>
                <h4>{wizard.name}</h4>

                { wizard.alternate_names[0] &&
                    <span>{`"${wizard.alternate_names[0]}"`}</span>
                }
                { wizard.image ?
                    <Image 
                        src={wizard.image}
                        width={150}
                        height={200}
                        alt={`Image ${wizard.name}`}
                    />
                : 
                    <FaHatWizard />
                }

                <div className={style.information}>
                    <div>
                        <span>House</span>
                        <h6>{wizard.house}</h6>
                    </div>

                    <div>
                        <span>Patronus</span>
                        <h6>{wizard.patronus}</h6>
                    </div>
                </div>

                <div className={style.information}>
                    <div>
                        <span>Date Of Birth</span>
                        <h6>{wizard.dateOfBirth}</h6>
                    </div>

                    <div>
                        <span>Year of Birth</span>
                        <h6>{wizard.yearOfBirth}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WizardPage;