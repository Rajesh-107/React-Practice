import React, {createContext, useState} from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Shipment from "./components/Shipment/Shipment";

export const CatagoryContext = createContext();

function App() {
  const [category, setCategory] = useState('laptop');

return (
  <CatagoryContext.Provider value = {[category, setCategory]}>
    <p>Count value : {category} </p>
    <Header></Header>
    <Home></Home>
    <Shipment></Shipment>
  </CatagoryContext.Provider>
  
  
  );
}

export default App;
