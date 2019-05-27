import React from 'react';
import Moment from 'react-moment';
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
import './Display.css'

class Home extends React.Component {

    state = {
        temperature: [],
        city: "",
        country: "",
        description: "",
        error: "",
        arrayItems: [],
        visible: false
      }
    
      getWeather = async (event) => {
    
        event.preventDefault();
        const city = event.target.elements.city.value
        const country = event.target.elements.country.value
    
        try {
          await fetch (`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&APPID=70b6fb4a05336dad5c31989e929d7ed3`)
          .then(Response => Response.json())
          .then(data => 
            //console.log(data))
            this.setState({
              temperature: data.list,
              city: data.city.name,
              country: data.city.country
            })) 
          } catch (error) {
            throw "This city does not match!"
          }
      }
    
      temperatureSet(arrayItems) {
         return (
          <div>
            
            {arrayItems.map(ids => {
                if((arrayItems.indexOf(ids)) % 8 === 0) {
                  return( 
                      <div className="column">
                        <div className="row">
                          <Moment format="MM-DD">{ids.dt_txt}</Moment>
                          <h2><p>{(ids.main.temp - 273.15).toFixed(0)}&deg;C</p></h2>
                          <img src = {"http://openweathermap.org/img/w/" + ids.weather[0].icon + ".png"} 
                              height="110" width="120"/>
                          <font size="6"><p>{ids.weather[0].description}</p></font>
                        </div>
                      </div>
                  )
                }
            }
            )}
          </div>
        )
      }

    handleClick = () => {
        this.setState({ visible: !this.state.visible })
    }

    render() {
        return (

            <div>
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
            
                                <ListItem button component={Link} to="/inbox/"> 
                                    <ListItemIcon >
                                        <InboxIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Inbox & Feedbacks" />
                                </ListItem>
                
                                <ListItem button component={Link} to="/drafts/">
                                    <ListItemIcon>
                                        <DraftsIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Drafts" />
                                </ListItem>   
                    
                                </List>
                            </nav>
                        </div>
                    
                     </Drawer>
                </div>

            <form  className="title">
                <font size="8">{this.state.city}</font><br/><br/>
                <font size="6">{this.state.country}</font>
            </form>

             <div>
                <h2>{this.temperatureSet(this.state.temperature)}</h2>
                <div style={{height: '300px', position: 'relative'}}>
                <form onSubmit={this.getWeather} className="form2" >
                    <font size="5">Please type a City & Country</font>
                    <input name="city" type="text" placeholder="City..."/><br/>
                    <input name="country" type="text" placeholder="Country Code..."/>
                    <button>Get Weather</button>
                </form>
                </div>
             </div>

            </div>
       )
    }
}

export default Home

