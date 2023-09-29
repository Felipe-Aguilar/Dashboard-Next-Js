'use client';

import Link from 'next/link';
import style from '../dashboard/style.module.scss'; 
import { usePathname } from 'next/navigation';

interface Props {
    path: string;
    icon: JSX.Element;
    title: string;
    subTitle: string;
}

const SideBarMenuItem = ({path, icon, title, subTitle}: Props) => {

    const currentPath = usePathname();
    
    return ( 
        <Link 
            href={path} 
            className={`${style.linksContainer} ${currentPath === path ? style.active : ''}`}
        >
            
            {icon}

            <div>
                <h4>{title}</h4>
                <p>{subTitle}</p>
            </div>
        </Link>
    );
}

export default SideBarMenuItem;