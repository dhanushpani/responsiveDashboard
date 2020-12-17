import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';

import "./listitems.css"

 export default function listItems() {
     return (
        <div>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon className="listitems" />
          </ListItemIcon>
          <ListItemText primary="Dashboard" className="listitems" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ShoppingCartIcon className="listitems" />
          </ListItemIcon>
          <ListItemText primary="Orders" className="listitems" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon className="listitems" />
          </ListItemIcon>
          <ListItemText primary="Customers" className="listitems" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <BarChartIcon className="listitems"/>
          </ListItemIcon>
          <ListItemText primary="Reports" className="listitems" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LayersIcon className="listitems"/>
          </ListItemIcon>
          <ListItemText primary="Integrations" className="listitems"/>
        </ListItem>
      </div>
     )
 }
 


