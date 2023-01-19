
import * as React from 'react';
import {IconButton} from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import accounting from 'accounting';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { deleteProductById } from '../store/basket';

export default function CheckoutCard({ id,name, productType, price, rating, image, description}) {

  const dispatch = useDispatch();

  const removeItem = () =>{
    dispatch(deleteProductById(id));
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
            <Typography
                variant='h5'
                color='textSecondary'
            >
                {accounting.formatMoney(price)}
            </Typography>
        }
        title={name}
        subheader="In Stock"
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        
        title={name}
      />
      <CardActions disableSpacing style={{display: "flex", justifyContent:"space-between", textAlign:"center"}}>
        <div style={{display: "flex"}}>
            {
                Array(rating)
                .fill()
                .map((_, i) => (
                    <p key={i}>&#11088;</p>
                ))
            }
        </div>
        <IconButton onClick={removeItem}>
            <DeleteIcon fontSize='large' />
        </IconButton>
      </CardActions>
    </Card>
  );
}
