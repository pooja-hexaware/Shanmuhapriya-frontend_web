// import Button from '@mui/material/Button';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import * as React from 'react';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import Menu from '../menu/menu';
// import * as Icon from 'react-bootstrap-icons';
// import { fetchMenu } from './store/Menu.action';
// import Toppingcard from '../topping/topping';
// import Cart from '../cart/cart';
// import { Box } from '@mui/system';
// import Header from '../common/header/header';
// // import ButtonGroup from '@mui/material/ButtonGroup'
// // import AddIcon from "@mui/material/icons/Add";
// // import RemoveIcon from "@mui/material/icons/Remove";

// export default function Menus() {
//   const dispatch = useDispatch();

//   const menus = useSelector((state)=> state.Menu.menu.menus);

//   const [itemCount, setItemCount] = React.useState(1);
//   useEffect(() => {
//     dispatch(fetchMenu());
//   }, []);


//   useEffect(() => {
//     console.log(menus)
//   }, [menus]);

//   return (
//     <div>
//       <div>
//         <Header />
//       </div>
//     <div style={{display:'grid', margin: '0px 270px', 'grid-template-columns':'auto auto'}}>
//       {

//         menus?.map((menuitem) => {
//           return (

//             <Card style={{margin: '50px 50px', maxWidth: 400 }}>
//             <CardMedia
//                   component="img"
//                   height="200"
//                   image={menuitem.item_image}
//                   alt="restaurant image"
//                 />
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="div">
//               <h3>{menuitem.item}</h3>
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//               <h4>{menuitem.store_id}</h4>
//                 <h5>{menuitem.base_price}</h5>
//                 <p>{menuitem.item_description}</p>
//               </Typography>
//             </CardContent>
//               <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
//                 <Toppingcard />
//                 <Cart />
//                 {/* <ButtonGroup>
//           <Button
//             onClick={() => {
//               setItemCount(Math.max(itemCount - 1, 0));
//             }}
//           >
//             {" "}
//             <RemoveIcon fontSize="small" />
//           </Button>
//           <Button
//             onClick={() => {
//               setItemCount(itemCount + 1);
//             }}
//           >
//             {" "}
//             <AddIcon fontSize="small" />
//           </Button>
//         </ButtonGroup> */}


//               </Box>
//           </Card>

//           )
//         })

//       }

//       </div>
//       </div>
//   );
// }





import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Avatar, Button, CardActionArea, CardActions } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchMenu } from './store/Menu.action';
import { fetchTopping } from '../topping/store/Topping.action';
import { Dialog } from "@mui/material";
import OutlinedInput from '@mui/material/OutlinedInput';
import { Select } from "@mui/material";
import { FormControl } from "@mui/material";
import ListItemText from '@mui/material/ListItemText';
import { InputLabel } from "@mui/material";
import { MenuItem, MenuList, Tab } from "@mui/material";
import Header from '../common/header/header';
import { addCartItem } from '../cart/store/cartSlice';
import Cart from '../cart/cart'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Drawer from '@mui/material/Drawer';
import{ ListItemAvatar }from '@mui/material';

export default function Menu() {
  const dispatch = useDispatch();
  const menus = useSelector((state) => state.Menu.menu.menus);
  const [num, setNum] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [cart, setCart] = useState([]);
  const [selectedValue, setSelectedValue] = useState([])

  const toppings = useSelector((state) => state.Topping.topping.toppings);

  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    dispatch(fetchTopping());
  }, []);

  useEffect(() => {
    console.log(toppings)
  }, [toppings]);

  useEffect(() => {
    dispatch(fetchMenu());
  }, []);

  useEffect(() => {
    console.log(menus)
  }, [menus]);

  const AddCart = (data) => {
    setCart((oldcart) => {
      return [...oldcart, data]
    })
    dispatch(addCartItem(data));
  }
  const handleOrder = (Name, Itemprice, toppings) => {
    var price = 0;
    toppings.map((item) => {
      price = price + item.price;
    })
    price = price + Itemprice;
    console.log(price + Itemprice);
    console.log(quantity);
    setNum((n) => ++n);
    var data = {
      "name": Name,
      "price": price,
      "quantity": quantity
    };
    
    AddCart(data);
  }
  console.log("cart array", cart);
  const QuantityHandler = (event) => {
    setQuantity(event.target.valueAsNumber);
  }
  const handleChange = (event) => {
    event.preventDefault();
    const {
      target: { value },
    } = event;
    setSelectedValue(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

 
  const handleClose = () => {
    setOpen(false);
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });
  const handleOpen = () => {
    setOpen(true);
  }
  return (
    <>
       
      <div style={{ backgroundImage: `url('https://www.bpimaging.com/assets/uploads/2015/02/11431_119.jpg')`, 'background-position': 'center center' }} className='app-container1'>
      <div className='paper'>

            <Card sx={{ display: 'flex', width:'80%' }} >

            <CardContent sx={{ flex: '1 0 auto' }}>

                  <Typography component="div" variant="h5">

                    Good Food,Great Time

                  </Typography>

                  <Typography variant="body2" color="text.secondary" style={{color: 'black'}}>

                    our chef's at wiwi make delicious food selections every week-you pick,we cook and deliver

                  </Typography>

                </CardContent>

            </Card>

            </div>
      <div style={{ display: 'grid', margin: '0px 100px', 'grid-template-columns': 'auto auto' }}>
        
          {menus?.map(data =>
            // <Paper
            //   sx={{
            //     p: 4,
            //     margin: 'auto',
            //     maxWidth: 700,
            //     flexGrow: 1,
            //     backgroundColor: (theme) =>
            //       theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            //   }}
            // >
              <Card  style={{ margin: '50px 50px', maxWidth: 400 }}>
                {/* <Box sx={{ width: '100%' }}> */}
                <CardMedia
                  component="img"
                  sx={{ width: 400, height: 200 }}
                  image={data.item_image}
                  alt="Live from space album cover" />
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                      {data.item}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" >
                      {data.item_description}
                    </Typography>
                  </CardContent>
                  <Typography>${data.base_price}</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1, width: '300px' }}>
                    <Button onClick={handleOpen} style={{width: '500px', backgroundColor: 'Black'}}>Toppings</Button>
                    <Dialog onClose={handleClose} open={open}>
                      <List sx={{ pt: 0 }}>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} style={{width: '300px'}}>
                          <InputLabel>Select the Toppings</InputLabel>
                          <Select multiple value={selectedValue} onChange={handleChange} input={<OutlinedInput label="Tag" />}
                          >
                            {toppings?.map((m, i) => (
                              <MenuItem
                                key={i} value={{"image": m.image, "name": m.name, "price": parseFloat(m.price) }}
                              >
                                <ListItemAvatar>

                                  <Avatar src={m.image}></Avatar>

                                </ListItemAvatar>
                                <ListItemText primary={m.name} /><ListItemText primary={m.price} /></MenuItem>))}
                          </Select>
                        </FormControl>
                        <Tab /><Button variant="contained" color="success" onClick={handleClose} style={{position: 'relative', top: '15px'}}>Done</Button>
                      </List></Dialog>
                      &nbsp;&nbsp;&nbsp;
                    <Button onClick={() => handleOrder(data.item, data.base_price, selectedValue) } style={{width: '300px', backgroundColor: 'Black'}}>Add</Button>
                    &nbsp;&nbsp;&nbsp;
                    <TextField type="number" size="small" sx={{ width: 300 }} onChange={QuantityHandler}/>
                  </Box>
                {/* </Box> */}
                <CardContent>
                </CardContent>
              </Card>
            // {/* </Paper> */}
          )}
        </div>
      </div>
    </>
  );
}