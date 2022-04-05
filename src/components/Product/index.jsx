import React from 'react';
import './style.css';



const Product = ({title}) => {
    return (
      <div className="product">
      <img className="product__image" src="assets/running-shoes.jpg" alt="Běhací tenisky" />
      <div className="product__content">
        <h3 className="product__name">Běhací tenisky</h3>
        <p className="product__description">Růžová s kontrastními šedými a bílými detaily? Veliká paráda! Tyhle tenisky jsou další srdcová záležitost.</p>
        <p className="product__price">1790 Kč</p>
      </div>
    </div>
    )
};

export default Product;
