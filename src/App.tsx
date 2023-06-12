import React from 'react';
import "../src/components/language/18n"
import Header from "./components/header/Header";
import ProductList from "./components/pages/produc-list/ProductList";
import {Route, Routes} from "react-router-dom";
import ProductCard from "./components/pages/product-card/Product-card";
import ProductJuices from "./components/pages/product-juice/Product-juices";
import Language from "./components/pages/Language/Language";

function App() {
    return (
        <>
            <Header/>
            <Language/>
            <ProductCard/>
            <ProductList/>
            <ProductJuices/>
        </>
    );
}

export default App;
