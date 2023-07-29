import React from "react";

const Cart = ({ data }) => {
  console.log(data);

  return (
    <div>
      <h1>{data[0].info.areaName}</h1>
    </div>
  );
};

export default Cart;
