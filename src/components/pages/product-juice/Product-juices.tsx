import React from 'react';
import './product-juices.scss'
import {useAppSelector} from "../../../hooks/useAppSelector";
const ProductJuices = () => {
    const {juiceCard} = useAppSelector(state => state.dark)
    return (
        <>
            {
                juiceCard ?
                    <div>
                        <div className="product-juice">
                            <div className="container">
                                <div className="juice-content">
                                    <h2>Juices</h2>
                                    <div className="juice-card">
                                        <p>Carbonated</p>
                                        <p>Still</p>
                                        <p>Water</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> : ''
            }

        </>

    );
};

export default ProductJuices;
