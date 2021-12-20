import React, { useContext } from 'react';
import { CatagoryContext } from '../../App';

const Shipment = () => {
    const [category, setCategory] = useContext(CatagoryContext);
    return (
        <div>
            <h2>This is Shipment</h2>
            <button onClick ={()=> setCategory(category + 1)}>click Category</button>
        </div>
    );
};

export default Shipment;