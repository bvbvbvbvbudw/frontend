import React, { useState } from 'react';
import Product from './Product';

const initProds = [
  [
    { id: 1, field: 'name', value: 'prod1', isEdit: false },
    { id: 2, field: 'cost', value: 'cost1', isEdit: false },
    { id: 3, field: 'catg', value: 'catg1', isEdit: false },
  ],
  [
    { id: 4, field: 'name', value: 'prod2', isEdit: false },
    { id: 5, field: 'cost', value: 'cost2', isEdit: false },
    { id: 6, field: 'catg', value: 'catg2', isEdit: false },
  ],
  [
    { id: 7, field: 'name', value: 'prod3', isEdit: false },
    { id: 8, field: 'cost', value: 'cost3', isEdit: false },
    { id: 9, field: 'catg', value: 'catg3', isEdit: false },
  ],
];

export default function Products() {
  const [prods, setProds] = useState(initProds);

  function changeField(id, field, event) {
    setProds(
      prods.map((prod) =>
        prod.map((item) => {
          if (item.id === id) {
            item[field] = event.target.value;
          }
          return item;
        })
      )
    );
  }
  for (let i = 0; i < prods.length; i++) {
    rows += prods[i].map((prod) => (
      <>
      
        {prod.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            name={item.name}
            cost={item.cost}
            catg={item.catg}
            changeField={changeField}
          />
        ))}
      </>
    ));
  }
  

  return (
    <>
      <div>
        <h1>Таблиця продуктiв</h1>
        <table>
          <tbody>{rows}</tbody>
        </table>
      </div>
    </>
  );
}
