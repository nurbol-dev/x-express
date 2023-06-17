import React from 'react';
import "../src/components/language/18n"
import Header from "./components/header/Header";
import ProductList from "./components/pages/produc-list/ProductList";
import ProductCard from "./components/pages/product-card/Product-card";
import ProductJuices from "./components/pages/product-juice/Product-juices";

function App() {
    return (
        <>
            <Header/>
            <ProductCard/>
            <ProductList/>
            <ProductJuices/>
        </>
    );
}

export default App;
