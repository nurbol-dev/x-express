import React from 'react';
import "../src/components/language/18n"
import Header from "./components/header/Header";
import ProductList from "./components/pages/produc-list/ProductList";
import ProductCard from "./components/pages/product-card/Product-card";
import {Route, Routes} from "react-router-dom";
function App() {
  return (
    <>
        <Header/>
        <Routes>
            <Route path={''} element={<ProductList/>}/>
            <Route path={'/product-card'} element={<ProductCard/>}/>
        </Routes>
    </>
  );
}

export default App;
