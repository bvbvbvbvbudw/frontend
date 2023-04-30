import React from "react";
import ProductField from './ProductField';



export default function Product(item) {
console.log(item);
console.log(1);
    
    return (
        <>
        <tr>
            <ProductField id={item.id} text={item.name} type="name" changeField={item.changeField} />
            <ProductField id={item.id} text={item.cost} type="cost" changeField={item.changeField} />
            <ProductField id={item.id} text={item.catg} type="catg" changeField={item.changeField} />
        </tr>
    </>
    );
}