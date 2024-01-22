import Link from 'next/link'
import style from '../../style.module.scss';
import SideBar from '@/components/SideBar';

export default function NotFound() {
    return (
        <div className={style.containerMio}>

            <div className={style.body}>
                <div className={style.error404}>
                    <div>
                        <h1>404</h1>
                        <span>Wizard not found</span>
                        <Link href={'/dashboard/main'}>
                            Go home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
)
}