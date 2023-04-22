import React from 'react';
import ProductField from './ProductField';

export default function Product({ id, name, cost, catg, changeField }) {


    return (<>

        <tr>
            <ProductField id={id} text={name} type='name' changeField={changeField} />
            <ProductField id={id} text={cost} type='cost' changeField={changeField} />
            <ProductField id={id} text={catg} type='catg' changeField={changeField} />
        </tr>

    </>)
}
