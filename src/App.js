import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import  ListItems  from './components/listItems';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import BarChartIcon from '@material-ui/icons/BarChart';
import PeopleIcon from '@material-ui/icons/People';
import { Link } from "react-router-dom";
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Dashboard"
import Orders from "./components/orders"
import Customers from "./components/customers"
import Reports from "./components/Reports"


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    background: "#D7E1EC",
    height:"100vh"
  },
  bottomroot: {
    display: 'flex',
    background: "#D7E1EC",
    width: '100%',
    position: 'fixed',
    bottom: 0,
    color: "blue"
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,

  },
  appBar: {
    background : "rgba(29,161,242,1.00)",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,

  content: {
    flexGrow: 1,
    height: '100%',
    overflow: 'auto',
  },
  container: {
    height:"auto",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(2)
  },
  paper: {
    padding: theme.spacing(1),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 200,
  },
  fixedsidebar:{
    height:500,
    paddingTop : theme.spacing(5)
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div>
    <Router>
    <div className={classes.root}>
      <CssBaseline />
      <div >
      <AppBar position="fixed" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar} >
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title} justifyContent="right">
            Responsive Layout
          </Typography>
        </Toolbar>
      </AppBar>
      </div>
      <div className="sidebar1">
      <Paper className={classes.fixedsidebar} >
        <ListItems />
      </Paper>
      </div>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path= "/orders" component={Orders} />
          <Route path= "/customers" component={Customers} />
          <Route path= "/reports" component={Reports} />
        </Switch>
      </main>
    </div>
    <div className="bottombar">
      <BottomNavigation value={value} onChange={handleChange} className={classes.bottomroot}>
      <BottomNavigationAction label="Dashboard" value="recents" icon={<DashboardIcon />} component={Link} to="/" activeClassName={classes.active}/>
      <BottomNavigationAction label="Orders" value="favorites" icon={<ShoppingCartIcon />}component={Link} to="/orders"/>
      <BottomNavigationAction label="Customers" value="nearby" icon={<PeopleIcon />} component={Link} to="/customers"/>
      <BottomNavigationAction label="Reports" value="folder" icon={<BarChartIcon />} />
    </BottomNavigation>
    </div>
    </Router>
    </div>
  );
}