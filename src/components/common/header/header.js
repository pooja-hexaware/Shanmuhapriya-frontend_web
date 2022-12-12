// import React from 'react'
// import '../header/header.css'
// import "bootstrap/dist/css/bootstrap.css"
// import * as Icon from 'react-bootstrap-icons';
// import { useNavigate } from 'react-router-dom';
// import Button from '@mui/material/Button';
// import AddtoCart from '../../cart/addToCart';

// const Header = () => {

//   const navigate = useNavigate()


//   return (
//     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>
//   <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
//     <a class="navbar-brand" href="#">WiWi-CapStone</a>
//     <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      
//           <li class="nav-item active" style={{float: 'right', paddingLeft: "1250%"}}>
//             <Button>
//               <Icon.Cart3 color='white' size={70} />
//               <AddtoCart />
//             </Button>
//           </li>
//     </ul>
    
    
//   </div>
// </nav>
//   )
// }

// export default Header



import React from 'react'
import Avatar from '@mui/material/Avatar';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddtoCart from '../../cart/addToCart';
// import '../components/Home.css'
// import AddtoCart from './AddtoCart';
class Container extends React.Component {
    constructor(props) {
        super();
        this.state = {
            menuOpen: false
        }
    }
    header = () => {
        return (
            <div>
                <Box sx={{ flexGrow: 2 }}>
                    <AppBar position="static">
                        <Toolbar  style={{backgroundColor: 'black'}}>
                           
                            <Typography
                                variant="h5"
                                noWrap
                                component="div"
                                sx={{ display: { xs: 'none', sm: 'block' } }} style={{olor: 'white'}}
                            >
                                WIWI-Capstone
                            </Typography>
                            <Box sx={{ flexGrow: 1 }} />
                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <AddtoCart/>
                            </Box>
                        </Toolbar>
                    </AppBar>
                </Box>
            </div>
        )
    }
body=()=>{
    return(
        <div style={{backgroundImage: `url('https://en.free-wallpapers.su/data/media/2319/big/fd0242.jpg')`, 'background-position': 'center center'}}></div>
    )
}
    footer = () => {
        return (
            <div style={{ backgroundColor: "#4287f5" }}>
                <Typography align="center" style={{ fontSize: 20 }}>
                    © 2022 Hexaware Technologies Limited. All rights reserved
                </Typography>
            </div>
        )
    }
    render() {
        return (
            <div>
                {this.header()}
                <div style={{ height: "79vh" }}>
                    {this.props.children}
                    {this.body()}
                </div>
            </div>
        )
    }
}
export default Container;