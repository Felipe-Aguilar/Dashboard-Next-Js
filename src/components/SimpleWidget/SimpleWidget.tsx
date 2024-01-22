import Link from 'next/link';
import styles from './styles.module.scss';
import { BsBarChartSteps } from 'react-icons/bs';

interface Props {
    title: string;
    subTitle?: string;
    label?: string;
    icon?: React.ReactNode;
    href?: string;
}

const SimpleWidget = ({title, subTitle, label, href}: Props) => {
    return ( 
        <div className={styles.SimpleWidget}>
            <div className={styles.Header}>
                { label &&
                    <span>{label}</span>
                }
            </div>

            <div className={styles.Body}>
                <BsBarChartSteps />

                <div className='text-center'>
                    <h2>{title}</h2>
                    { subTitle &&
                        <span>{subTitle}</span>
                    }
                </div>
            </div>

            { href &&
                <div className={styles.Footer}>
                    <hr />
                    <Link href={`${href}`}>
                        Más
                    </Link>
                </div>
            }
        </div>
    );
}

export default SimpleWidget;