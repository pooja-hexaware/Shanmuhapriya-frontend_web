import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Menu from '../menu/menu';
import { fetchRestaurant } from './store/Restaurant.action';
import { Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Header from '../common/header/header';
 
export default function Restaurants() {
  const dispatch = useDispatch();

  const restaurants = useSelector((state)=> state.Restaurant.restaurants.restaurants);

  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchRestaurant());
  }, []);

  
  useEffect(() => {
    console.log(restaurants)
  }, [restaurants]);

  return (
    // <div>
    //   <div>
    //     <Header />
    //   </div>
    <div style={{backgroundImage: `url('https://en.free-wallpapers.su/data/media/2319/big/fd0242.jpg')`, 'background-position': 'center center'}}>
      <div style={{ display: 'grid', margin: '0px 250px', 'grid-template-columns': 'auto auto' }}>
        {

          restaurants?.map((rest) => {
            return (
              //   <Paper
              //   sx={{
              //     p: 4,
              //     margin: 'auto',
              //     maxWidth: 700,
              //     flexGrow: 1,
              //     backgroundColor: (theme) =>
              //       theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
              //   }}
              // >


              <Card style={{ margin: '50px 50px', maxWidth: 400 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={rest.store_image}
                  alt="restaurant image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <h3>{rest.store_name}</h3>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <h5>{rest.store_address}</h5>
                    <h5>{rest.store_city}-{rest.store_zip}</h5>
                    <h5>{rest.store_state}</h5>
                    <h5>{rest.store_phone}</h5>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => navigate('Menu')}>Menu</Button>
                </CardActions>
              </Card>
              // </Paper>
            )
          })

        }

      </div>
    </div>
  );
}
