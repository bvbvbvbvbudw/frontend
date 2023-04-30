import React from "react";


function Writer(props) {
  return (
    <>
      <div>
        {props.name} {props.lastName}
      </div>
      <hr />
    </>
  );
}

function Key(props) {
  return (
    <>
      {props.writers.map((item) => (
        <Writer key={item.id} {...item} />
      ))}
    </>
  );
}

export default Key;
