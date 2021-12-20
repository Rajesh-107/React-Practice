import React, { useContext } from 'react';
import { CatagoryContext } from '../../App';
import Catagories from '../Catagories/Catagories';


const Home = () => {
    const category = useContext(CatagoryContext); 
    return (
        <div style= {{border:'1px solid red'}}>
            <h2>This is Home {category}  </h2>
            <Catagories ></Catagories>
        </div>
    );
};

export default Home;