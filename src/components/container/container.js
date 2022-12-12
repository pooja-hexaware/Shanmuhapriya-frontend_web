import React from 'react'

import { Link } from 'react-router-dom'

import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';

import IconButton from '@mui/material/IconButton';

// import MenuIcon from '@mui/icons-material/Menu';

import Drawer from '@mui/material/Drawer';

import ListItem from "@mui/material/ListItem";

import ListItemText from '@mui/material/ListItemText';




class Container extends React.Component{

    constructor(props){

        super();

        this.state={

            menuOpen: false

        }

    }

    sidebar =() =>{

        const navigateToPage = (destination) => {window.location.assign(destination)}

        return(

            <Drawer open={this.state.menuOpen} onClose={() => { this.setState({ menuOpen: false}) }}>

                <ListItem button onClick={() => {navigateToPage("/home")}}>

                    <ListItemText primary={"Home"} />  

                </ListItem>

                <ListItem button onClick={() => {navigateToPage("/restaurant")}}>

                    <ListItemText primary={"Restaurants"} />  

                </ListItem>  

                <ListItem button onClick={() => {navigateToPage("/menu")}}>



                  <ListItemText primary={"Menu"} />  



              </ListItem>  

              <ListItem button onClick={() => {navigateToPage("/coupon")}}>



                  <ListItemText primary={"Coupon Validation"} />  



              </ListItem>  

            </Drawer>

        )

    }
    header=()=>{

        return(

            <div>

                <AppBar style={{position:"static",height:"10vh"}}>

                    <Toolbar>

                        <IconButton

                            size="large"

                            edge="start"

                            colour="inherit"

                            aria-label="menu"

                            sx={{mr: 2 }}

                            onClick={()=>{this.setState({menuOpen:true})}}

                         >

                            {/* <MenuIcon/> */}

                        </IconButton>

                    </Toolbar>

                </AppBar>

            </div>

        )

    }
    footer=()=>{

        return(

            <Toolbar style={{position:"static",backgroundColor:"grey" ,height:"6vh",color:"white"}}>

                <ul>

                    <li>

                        <Link to="/restaurant">

                            Restaurants

                        </Link>

                    </li>

                    <li>

                        <Link to="/menu">

                            Menu

                        </Link>

                    </li>

                    <li>

                        <Link to="/coupon">

                            CouponValidation

                        </Link>

                    </li>

                </ul>

            </Toolbar>

        )

    }
    render(){

        return(

            <div>

                  {this.sidebar()}

                  {this.header()}

                  <div style={{height:"100vh"}}>

                    {this.props.children}

                  </div>

                  {this.footer()}

            </div>

        )

    }

}

export default Container;