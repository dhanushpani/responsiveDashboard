import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
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
      height:400,
      paddingTop : theme.spacing(5)
    },
    rightbar:{
      marginTop:"8%",
      height: 500
    }
  }));


export default function Dashboard() {
    const classes = useStyles();
    return (
        <div>
          <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={classes.fixedHeight} elevation={0}>   
                <h1 className="post">Welcome posts</h1>         
              </Paper>
              <br />
              <Paper className={classes.fixedHeight} elevation={0} >
                <h1 className="post">post1</h1>   
              </Paper>
              <br />
              <Paper className={classes.fixedHeight} elevation={0} >
                <h1 className="post">Post2</h1>   
              </Paper>
              <br />
              <Paper className={classes.fixedHeight} elevation={0} >
                <h1 className="post">Post3</h1>   
              </Paper>
            </Grid>
            <Grid item xs={0} md={4} lg={3}>
              <Paper className="rightbar" elevation={0}className={classes.rightbar}>
                <span className="post">
                  will be hidden on mobile devices
                </span>
              </Paper>
            </Grid>
          </Grid>
          </Container>
        </div>
    )
}
