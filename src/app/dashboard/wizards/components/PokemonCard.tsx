'use client';

import { WizardsResponse } from "@/wizards/interfaces/wizards-response";
import Image from "next/image";
import style from '../../style.module.scss';
import Link from 'next/link';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { FaHatWizard } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/store";
import { toggleFavorite } from "@/store/wizards/wizards";

interface Props {
    wizard: WizardsResponse;
}

const WizardCard = ({wizard} : Props) => {

    const {id, name} = wizard;
    const isFavorite = useAppSelector(state => !!state.wizards.favorties[id]);
    const dispatch = useAppDispatch();

    const onToggle = () => {
        dispatch(toggleFavorite(wizard));
    }

    return ( 
        <div className={style.cardWizard}>
            <div className={style.image}>
                { wizard.image ?
                    <Image 
                        key={wizard.id}
                        src={wizard.image}
                        width={100}
                        height={130}
                        alt="Wizard image"
                        priority={ false }
                    />
                :
                    <FaHatWizard />
                }
                <h5>{name}</h5>

                <Link href={`wizard/${id}`}>
                    Más información
                </Link>
            </div>

            <div className={style.content}>
                <div 
                    onClick={onToggle}
                    className={style.container}
                >
                    { isFavorite ?
                        <BsHeartFill />
                    : 
                        <BsHeart />
                    }

                    <div>
                        <h6>
                            { isFavorite ?
                                'Es favorito'
                            :
                                'No favorito'
                            }
                        </h6>
                        <p>Click para cambiar</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WizardCard;