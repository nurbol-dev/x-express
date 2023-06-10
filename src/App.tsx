import React from 'react';
import "../src/components/language/18n"
import Header from "./components/header/Header";
import ProductList from "./components/pages/produc-list/ProductList";
import {Route, Routes} from "react-router-dom";
import ProductCard from "./components/pages/product-card/Product-card";
function App() {
    return (
    <>
        <Header/>
        <ProductCard/>
        <Routes>
            <Route path={'/'} element={<ProductList/>}/>
            {/*<Route path={'/product-card'} element={<ProductCard/>}/>*/}
        </Routes>
    </>
  );
}

export default App;
