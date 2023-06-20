import React from 'react';
import "../src/components/language/18n"
import Header from "./components/header/Header";
import ProductList from "./components/pages/produc-list/ProductList";
import ProductCard from "./components/pages/product-card/Product-card";
import ProductJuices from "./components/pages/product-juice/Product-juices";
import Language from "./components/pages/language/Language";
import LogIn from "./components/pages/logIn";
import ProductModal from "./components/pages/product-modal/Product-modal";
import {useAppSelector} from "./hooks/useAppSelector";
import Favorite from "./components/pages/favorite/favorite";

function App() {
    const {dark} = useAppSelector(s => s.dark)

    return (
        <div style={{background: dark ? "#1d1d1d" : "", position: "fixed", width: "100%", height: "100%"}}>
            <Header/>
            <Language/>
            <LogIn/>
            <ProductCard/>
            <ProductList/>
            <ProductJuices/>
            <ProductModal/>
            <Favorite/>
        </div>
    );
}

export default App;
