import accounting from "accounting";
import { Button, } from "@mui/material";
import "./totalStyles.css"
import { useSelector } from "react-redux";
export const Total = () => {

  const {product} = useSelector(state => state.basket);

  const getBasketTotal = (basket) => {
    return basket?.reduce((amout, item) => item.price + amout, 0);
  }
  return (
        <div className="root">
            <h5>Total items: {product?.length}</h5>
            <h5>{ accounting.formatMoney(getBasketTotal(product)) }</h5>
            <Button className="button" variant="contained" color="secondary">Check out</Button>
        </div>
  )  
}
