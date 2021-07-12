import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
const Subtotal = () => {

    const[{basket},dispatch] = useStateValue();
    let totalPrice=0;
    if(basket.length > 0){
     for(let i of basket){
          totalPrice = totalPrice + i.price;
     }

     console.log("totaaaaaaaaaaaaaal------------>",getBasketTotal(basket));
}
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{totalPrice}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}

        decimalScale={2}
        value={0} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button >Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;