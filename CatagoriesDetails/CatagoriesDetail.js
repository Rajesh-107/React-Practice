import React, { useContext } from 'react';
import { CatagoryContext } from '../../App';

const CatagoriesDetail = (props) => {
    const {name} = props.product;
    
    
    return (
        <div>
            <h4>This is catagoriers detail </h4>
            <h5 style={{color:'blueviolet'}}>Selected Product :{name} </h5>
        </div>
    );
};

export default CatagoriesDetail;