'use client';

import { useAppSelector } from "@/store";
import SimpleWidget from "../SimpleWidget/SimpleWidget";

const WidgetsGrid = () => {

    const isCart = useAppSelector(state => state.counter.count);

    return ( 
        <div className="d-flex justify-content-around mt-4">
            <SimpleWidget 
                subTitle="Productos agregados"
                title={`${isCart}`}
                label="Contador"
                href="/dashboard/counter"
            />
        </div>
    );
}

export default WidgetsGrid;