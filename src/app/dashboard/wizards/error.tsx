'use client' // Error components must be Client Components

import { useEffect } from 'react';
import { BsBugFill } from 'react-icons/bs';
import style from '../style.module.scss';

export default function Error({ error,reset, }: {
    error: Error & { digest?: string }
    reset: () => void
}) {

    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className={style.error}>
            <div className='d-flex justify-content-center align-items-center h-100'>
                <div>
                    <BsBugFill />
                    <h1>500</h1>
                    <h2>Server Error</h2>
                    <p>Whoops, something went wrong on our servers.</p>
                </div>
            </div>
        </div>
    )
}