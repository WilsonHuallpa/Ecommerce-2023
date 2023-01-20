import accounting from "accounting";
import { Button, } from "@mui/material";
import "./totalStyles.css"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export const Total = () => {

  const {product} = useSelector(state => state.basket);

  const getBasketTotal = (basket) => {
    return basket?.reduce((amout, item) => item.price + amout, 0);
  }
  return (
        <div className="root">
            <h5>Total items: {product?.length}</h5>
            <h5>{ accounting.formatMoney(getBasketTotal(product)) }</h5>
            <Link to="/checkout">
              <Button 
                className="button" 
                variant="contained" 
                color="secondary"
                
              >Check out</Button>
            </Link>
           
        </div>
  )  
}
