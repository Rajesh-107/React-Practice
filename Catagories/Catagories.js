import React, { useContext, useEffect, useState } from 'react';
import { CatagoryContext } from '../../App';
import CatagoriesDetail from '../CatagoriesDetails/CatagoriesDetail';

const allProducts = [
    {name:'Lenovo', category: 'laptop'}, {name: 'Asus' , category:'laptop'}, {name: 'Dell' , category:'laptop'},
    {name:'Samsung', category: 'mobile'}, {name: 'Nokia' , category:'mobile'}, {name: 'Apple' , category:'mobile'},
    {name:'Cannon', category: 'camera'}, {name: 'Nikkon' , category:'camera'}, {name: 'Sony' , category:'camera'}

]

const Catagories = () => {
    const [category] =useContext(CatagoryContext);
    const [products, setProducts] = useState([]);
    useEffect(()=> {
       const matchedProducts = allProducts.filter(pd => pd.category === category.toLowerCase());
       setProducts(matchedProducts);
 
    },[category])
    
    return (
        <div>
            <h1>See your Catagories:{category} </h1>
            {
                products.map( pd => <CatagoriesDetail product = {pd}></CatagoriesDetail>)
            }
        </div>
    );
};

export default Catagories;