import Image from 'next/image';
import style from '../dashboard/style.module.scss'; 
import SideBarMenuItem from './SideBarMenuItem';
import { BsHouse, BsCalculator, BsEyeglasses } from "react-icons/bs";

const menuItems = [
    {
        path: '/dashboard/main',
        icon: <BsHouse />,
        title: 'DashBoard',
        subTitle: 'Visualización'
    },
    {
        path: '/dashboard/counter',
        icon: <BsCalculator />,
        title: 'Counter',
        subTitle: 'Contador Client Side'
    },
    {
        path: '/dashboard/pokemons',
        icon: <BsEyeglasses />,
        title: 'Pokemons',
        subTitle: 'Generación estática'
    }
]

const SideBar = () => {
    return ( 
        <div className={style.sidebar}>
            <h1>Dash<span>8</span>.</h1>
            <p>
                Manage your actions and activities
            </p>

            <div className={style.name}>
                <h2>Welcome back,</h2>
                
                <div className={style.nameContainer}>
                    <Image 
                        src={'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c'}
                        width={50}
                        height={50}
                        alt='User image'
                    />
                    <h3>Felipe Aguilar</h3>
                </div>

                <div className={style.links}>
                    
                    { menuItems.map(item => (
                        <SideBarMenuItem key={item.path} {...item}/>
                    ))
                    }
                </div>
            </div>
        </div>
    );
}

export default SideBar;