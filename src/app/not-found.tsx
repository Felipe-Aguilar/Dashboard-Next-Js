import Link from 'next/link'
import style from './dashboard/style.module.scss';
import SideBar from '@/components/SideBar';

export default function NotFound() {
  return (
    <div className={style.containerMio}>

        <SideBar />

        <div className={style.body}>
            <div className={style.error404}>
                <div>
                    <h1>404</h1>
                    <span>Page not found</span>
                    <Link href={'/dashboard/main'}>
                        Go home
                    </Link>
                </div>
            </div>
        </div>
    </div>
)
}