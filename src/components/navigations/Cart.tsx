// import React from "react";
import { CartRecord } from "../../types/Cart";

interface CartProps {
  data: CartRecord | null;
}

const Cart = (props: CartProps) => {
  return <h2>{props.data?.name}</h2>;
};

export default Cart;
