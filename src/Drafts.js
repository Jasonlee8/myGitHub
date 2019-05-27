import React from "react";

import AppBar from '@material-ui/core/AppBar';
import MenuButton from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { Drawer } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './App.css'

class Drafts extends React.Component {

    state = {
        visible: false
    }       

    handleClick = () => {
        this.setState({ visible: !this.state.visible })
    }

    render() {
        return (

            <div>

                <div>
                    <h1>I am learning right now！</h1>
                </div>

                <div>
                <AppBar position="fixed">
                    <Toolbar variant="dense">
                    <IconButton onClick={this.handleClick} 
                        className="menuButton" color="inherit" aria-label="Menu">
                        <MenuButton />                 
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        Jason Weather App
                    </Typography>
                    </Toolbar>
                </AppBar>
                </div>
        
                <div>
                    <Drawer className="Drawer" anchor="left" open={this.state.visible}>  
                    
                    <AppBar position="sticky">
                        <IconButton onClick={this.handleClick} 
                            className="menuButton2" color="inherit" aria-label="Menu" >
                        <MenuButton />            
                        </IconButton>
                    </AppBar> 
            

                        <div className="Link1">
                            <nav>
                                <List>   
            
                                <ListItem button component={Link} to="/"> 
                                    <ListItemIcon >
                                        <InboxIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Home" />
                                </ListItem> 
                    
                                </List>
                            </nav>
                        </div>
                    
                    </Drawer>
                </div>
            </div>
        )

    }
}

export default Drafts