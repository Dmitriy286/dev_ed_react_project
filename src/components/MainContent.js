import React, {useState} from "react";
import ReactDom from "react-dom";

import StarRating from "./StarRating";
import PriceComponent from "./PriceComponent"
import MoneyInCreditComponent from "./MoneyInCreditComponent"
import img from "../images/img_3.jpg";
import ShortProductDescription from "./ShortProductDescription";


export default function MainContent() {
    let productName = "Боевой дроид";

    return (
        <div className="main-content">
            <h1>{productName}</h1>
            <h1 className="productName">{productName}</h1>
            <div className="main-block">
                <div className="product-card">
                    <div className="img-and-shortdescr">
                    <img className="product-img" src={img} />
                    <ShortProductDescription/>
                    </div>
                    <div className="full-descr">
                        <h4>Описание товара</h4>
                        <ul className="list">
                            <li>Цвет</li>
                            <li>Размер</li>
                            <li>Вес</li>
                        </ul>
                    </div>
                </div>
                <div className="money-block">
                    <PriceComponent/>
                    <MoneyInCreditComponent/>
                </div>
            </div>
        </div>
    )
}
