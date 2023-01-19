import * as React from 'react';
import {styled} from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AddShoppingCart } from '@mui/icons-material';
import accounting from 'accounting';
import { useDispatch } from 'react-redux';
import { addNewEmptyPoduct } from '../store/basket';

//import product from '../imgs/Remera23.jpg'

// const ExpandMore = makeStyles((theme) => ({
//     root: {
//         maxWidth: 345,
//     },
//     action: {
//         marginTop: "1rem",
//     },
//     media: {
//         height: 0,
//         paddingTop: "56.25%",
//     },
//     expand: {
//         transform: "rotate(0deg)",
//         marginLeft: "auto",
//         transition: theme.transitions.create("transform", {
//             duration: theme.transitions.duration.shortest,
//         }),
//     },
//     expandOpen: {
//         transform: "rotate(180deg)",
//     }
// }));

//VER LOS ESTILOS DE LOS CARD
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Product({id,name, productType, price, rating, image, description}) {

  const [expanded, setExpanded] = React.useState(false);
  const dispatch = useDispatch();


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const addToBasket = () =>{
    const item = {
      id,
      name, 
      productType,
      image,
      price,
      rating,
      description, 
    }

    dispatch(addNewEmptyPoduct(item));
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
            <Typography variant='h5' color='textSecondary'>
                {accounting.formatMoney(price)}
            </Typography>
        }
        title={name}
        subheader="In Stock"
      />
      <CardMedia component="img" height="194" image={image} title={name} />
      <CardContent>
        <Typography variant="body2" color="text.secondary" component='p'>
            {productType}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        {/* AGREGAMOS EL PRODUCTO AL CARRITO (ONCLICK) */}
        <IconButton aria-label="add to Cart" onClick={addToBasket}>
          <AddShoppingCart fontSize='large'/>
        </IconButton>
        {
            Array(rating)
            .fill()
            .map((_, i) => (
                <p key={i}>&#11088;</p>
            ))
        }
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
