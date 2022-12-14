import React from 'react';
import {FilterArrayContext, ImmutableProductListContext, ProductListContext} from "../../services/Context";
import ProductService from "../../services/ProductService";
import Category from "./Category";
import SubCategory from "../all products components/SubCategory";

function DropDownMenu() {
    // const {products} = React.useContext(ProductListContext);
    const {immutableProductList} = React.useContext(ImmutableProductListContext);

    let categories = ProductService.getCategories(immutableProductList).map(category => {
            return <Category key={category.id} category={category.category}/>
        }
                )

    return (
        <div className="dropdown">
            <button className="dropbtn">Каталог</button>
            <div className="dropdown-content">
                {/*<ul>*/}
                {categories}
                {/*</ul>*/}
            </div>
        </div>
    );
}

export default DropDownMenu;