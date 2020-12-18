import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import "./listitems.css"

// const useStyles = makeStyles((theme) => ({
//   active: {
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',

//   },
// }));

 export default function ListItems() {
  // const classes = useStyles();
     return (
        <div>
        <div className="sidebar">     
        <ListItem button component={NavLink} to={"/"} > 
          <ListItemIcon>
            <DashboardIcon className="listitems" />
          </ListItemIcon>
          <ListItemText primary="Dashboard" className="listitems" />
        </ListItem>
     
        <ListItem button component={NavLink} to={"/orders"} >
          <ListItemIcon>
            <ShoppingCartIcon className="listitems" />
          </ListItemIcon>
          <ListItemText primary="Orders" className="listitems" />
        </ListItem>
      
        <a href="/customers">
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon className="listitems" />
          </ListItemIcon>
          <ListItemText primary="Customers" className="listitems" />
        </ListItem>
        </a>
        <a href="/reports">
        <ListItem button>
          <ListItemIcon>
            <BarChartIcon className="listitems"/>
          </ListItemIcon>
          <ListItemText primary="Reports" className="listitems" />
        </ListItem>
        </a>
      </div>
      <div>
      </div>
      </div>
     )
 }
 


