import React from 'react';
import "../src/components/language/18n"
import Header from "./components/header/Header";
import ProductList from "./components/pages/produc-list/ProductList";
import ProductCard from "./components/pages/product-card/Product-card";
import ProductJuices from "./components/pages/product-juice/Product-juices";
import Language from "./components/pages/language/Language";
import LogIn from "./components/pages/logIn";

function App() {
    return (
        <>
            <Header/>
            <Language/>
            <LogIn/>
            <ProductCard/>
            <ProductList/>
            <ProductJuices/>
        </>
    );
}

export default App;
