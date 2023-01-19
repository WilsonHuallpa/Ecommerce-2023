import * as React from 'react';
import Grid from '@mui/material/Grid';
import Product from './Product';
import { products } from '../productData';
//Entender el tema de los estilos propios
// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

export function Products() {
  return (
    <div style={{flexGrow: 1 , padding: (2) }}>
        <Grid container spacing={2}>
            {
                products.map((product) => (
                    <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                        <Product key={product.id} {...product} />
                    </Grid>
                ))
            }
        </Grid>
    </div>
   
  );
}
