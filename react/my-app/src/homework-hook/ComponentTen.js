import React, { useState } from 'react';
import open from './img/open.png';
import close from './img/close.png';

export default function ComponentTen() {
  const [table, setTable] = useState(close);

  const toggleTable = () => {
    if (table === close) {
      setTable(open);
    } else {
      setTable(close);
    }
  };

  return (
    <>
        <p>10 - при кліку на тумбочку відкривати шухлядку</p>
      <img src={table} onClick={toggleTable} style={{width:300,height:300}}/>
    </>
  );
}
