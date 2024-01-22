import 'bootstrap/dist/css/bootstrap.min.css';

import style from './style.module.scss'
import SideBar from '@/components/SideBar';


export default function DashboardLayout({children}: {
    children: React.ReactNode;
}) {
return (
    <div className={style.containerMio}>

        <SideBar />

        <div className={style.body}>
            {children}
        </div>
    </div>
)}