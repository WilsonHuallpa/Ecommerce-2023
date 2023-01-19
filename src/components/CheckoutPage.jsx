import React from "react";
import { Grid, Typography } from "@mui/material";
import { products } from "../productData";
import CheckoutCard from "./CheckoutCard";
import { Total } from "./Total";
import { useSelector } from "react-redux";

export const CheckoutPage = () => {
    const {product} = useSelector( state => state.basket );

    function FormRow(){
        return(
            <React.Fragment>
                {
                    //Arreglar los key repetidos!
                    product?.map((item) => (
                        <Grid key={item.id} item xs={12} sm={8} md={6} lg={4}>
                            <CheckoutCard key={item.id} {...item} />
                        </Grid>
                    ))
                }
            </React.Fragment>
        );
    }
  return (
    <div style={{ flexGrow: 1, padding: "2rem"}}>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography align="center" gutterBottom variant="h4">
                    Shopping Cart
                </Typography>
            </Grid>
            <Grid item xs={12} sm={8} md={9} container spacing={2}>
                <FormRow/>
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
                <Typography align="center" gutterBottom variant="h4">
                   <Total/>
                </Typography>
            </Grid>
        </Grid>
    </div>
  )
};
