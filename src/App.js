// React Base
import React, { Component } from 'react';

// Style
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Paper,
  AppBar ,
  Toolbar ,
  Typography ,
  Button ,
  IconButton ,
  FormControlLabel ,
  Menu ,
  MenuItem,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  withWidth,
  Hidden,
  Slide,
  Drawer,
  List,
  Divider
} from '@material-ui/core';

//Colors
import pink from '@material-ui/core/colors/pink';

// Icons
import{
  AccountCircle
} from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';


// Animate
import Typist from 'react-typist';
import * as Scroll from 'react-scroll';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

// Image Source
import base from './res/img/full-base.png';
import object from './res/img/object.svg';
import instagram from './res/img/icons/instagram.svg';
import github from './res/img/icons/github.svg';
import network from './res/img/content/network.jpg';
import uiux from './res/img/content/uiux.jpg';
import weblogo from './res/img/content/weblogo.png';
import netsec from './res/img/content/netsec.jpg';
import owlbookstore from './res/img/content/owlbookstore.png';
import pariwisata from './res/img/content/pariwisata.png';
import perpusdigital from './res/img/content/perpusdigital.png';
import perpusdigitalbo from './res/img/content/perpusdigital-bo.png';
import perpusdigitalmobilefo from './res/img/content/perpusdigital-mobile-fo.png';
import sisteminformasi from './res/img/content/sisteminformasi.png';
import travelpoint from './res/img/content/travelpoint.png';
import mtcna from './res/img/content/mtcna.png';
// import logo from './res/img/logo.svg';

// library.add(instagram);

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
  },
  contentHeight: {
    height: "101vh",
    width: "100%",
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flex: '1 0 auto',
    margin: theme.spacing.unit,
  },
  grow:{
    flexGrow:1,
  },
  list: {
    width: 250,
  },
  someSpace:{
    margin: "4vh 0",
    padding: theme.spacing.unit,
   [theme.breakpoints.down('sm')]: {
     margin: "2vh 0",
   },
  },
  menuButton:{
    marginLeft: -12,
    marginRight: 20,
  },
  card: {
    minHeight: 400,
    maxWidth: 400,
    padding: theme.spacing.unit,
   [theme.breakpoints.down('sm')]: {
     maxWidth: 800,
   },
  },
  media: {
    height: 180,
    padding: theme.spacing.unit,
   [theme.breakpoints.down('sm')]: {
     maxWidth: 800,
   },
  },
  respTypewriter: {
    padding: theme.spacing.unit,
   [theme.breakpoints.down('sm')]: {
     textAlign: 'center',
     marginTop: "10vh",
     fontSize: '70%',
     paddingLeft: 25,
     paddingRight: 25,
   },
   [theme.breakpoints.up('md')]: {
     textAlign: 'center',
     marginTop: "10vh",
   },
   [theme.breakpoints.up('lg')]: {
     textAlign: 'left',
   },
 },
 respBaseImage: {
   padding: theme.spacing.unit,
  [theme.breakpoints.down('sm')]: {
    margin: '2vh 0vh 5vh 0vh'
  },
  [theme.breakpoints.up('md')]: {
    margin: '5vh 0vh 5vh 0vh'
  },
  [theme.breakpoints.up('lg')]: {
    marginTop: "10vh",
  },
 },
 respFooterIcons: {
   width: '2em',
   padding: '5% 2%',
   padding: theme.spacing.unit,
  [theme.breakpoints.down('sm')]: {
    width: '1em',
  },
  [theme.breakpoints.up('md')]: {
    width: '1.5em',
  },
 }

});

var prepose = "I'm "

function portfolio (props) {
  var state ;

  function toggleDrawer(side, open) {
    state = {"left" : true};
  };

  const { classes } = props;
  const primary = pink[500];

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <AppBar className="appBarHeader" position="fixed" color="white">
          <Toolbar>
            <Hidden mdUp>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon onClick={() => {toggleDrawer('left',true)}} />
              </IconButton>
            </Hidden>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              \ R
            </Typography>
            <Hidden smDown>
              <Link activeClass="active" to="contentHome" spy={true} smooth={true} offset={0} duration={500} >
                <Button>Home</Button>
              </Link>
              <Link activeClass="active" to="contentProject" spy={true} smooth={true} offset={-10} duration={500} >
                <Button>Skills</Button>
              </Link>
              <Link activeClass="active" to="contentContact" spy={true} smooth={true} offset={-80} duration={500} >
                <Button>Project</Button>
              </Link>
            </Hidden>
          </Toolbar>
        </AppBar>

        <Grid name="contentHome" className={classes.contentHeight ,classes.someSpace} container xs={12} >
          <Grid xs={1}></Grid>
          <Slide direction="left" in="true" mountOnEnter unmountOnExit>
            <Grid container className={classes.respTypewriter} alignItems="center" justify="center" xs={12} lg={4}>
              <Grid item xs={12}>
                <Typist
                  startDelay={4000}
                >
                  <span className="typewriter">
                    <Typist.Delay ms={200}/>
                    Hell World.
                    <Typist.Backspace count={7} delay={1800}/>
                    o World,
                  </span>
                  <br/>
                  <span className="typewriter-name">{prepose}<b>Rifky Ari Yunanto.</b></span>
                  <p className="typewriter-sub">A novice designers and developers from Yogyakarta.</p>
                </Typist>
              </Grid>
            </Grid>
          </Slide>
          <Grid className={classes.respBaseImage} xs={12} lg={6}>
              <div className="object">
                <img src={base} className="App-logo background" />
              </div>
          </Grid>
          <Grid lg={1}></Grid>
        </Grid>

        <Grid name="contentProject"  className={classes.contentHeight ,classes.someSpace} container xs={12} >
            <Grid xs={12}>
              <Paper elevation="0" className="primaryBackground">
                <Grid container lg>
                  <Grid item xs></Grid>
                  <Grid item xs={10}>
                    <Paper className="contentProjectPaper secondaryBackground">
                      <Grid container justify="center">
                        <Typography className="primaryType" style={{ margin: "1vh 0 3vh 0" }} variant="h4" >What Can I Do</Typography>
                      </Grid>
                      <Grid container spacing="16">

                        <Grid item xs={12} md={6} lg={3}>
                          <Card className={classes.card}>
                            <CardActionArea className="cardFullWidth">
                              <CardMedia
                                className={classes.media}
                                image={network}
                              />
                              <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                  Networking.
                                </Typography>
                                <Typography component="p">
                                  Mampu memahami dan membuat jaringan sederhana hingga menengah.
                                </Typography>
                              </CardContent>
                            </CardActionArea>
                          </Card>
                        </Grid>

                        <Grid item xs={12} md={6} lg={3}>
                          <Card className={classes.card}>
                            <CardActionArea className="cardFullWidth">
                              <CardMedia
                                className={classes.media}
                                image={uiux}
                                title="Contemplative Reptile"
                              />
                              <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                  UI/UX Design
                                </Typography>
                                <Typography component="p">
                                  Mampu membuat desain UI/UX yang dapat digunakan dalam pembuatan apps.
                                </Typography>
                              </CardContent>
                            </CardActionArea>
                          </Card>
                        </Grid>

                        <Grid item xs={12} md={6} lg={3}>
                          <Card className={classes.card}>
                            <CardActionArea className="cardFullWidth">
                              <CardMedia
                                className={classes.media}
                                image={weblogo}
                                title="Contemplative Reptile"
                              />
                              <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                  Web Development
                                </Typography>
                                <Typography component="p">
                                  Mampu membuat Web dengan berbagai dasar pemrograman.
                                </Typography>
                              </CardContent>
                            </CardActionArea>
                          </Card>
                        </Grid>

                        <Grid item xs={12} md={6} lg={3}>
                          <Card className={classes.card}>
                            <CardActionArea className="cardFullWidth">
                              <CardMedia
                                className={classes.media}
                                image={netsec}
                                title="Contemplative Reptile"
                              />
                              <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                  Network Security
                                </Typography>
                                <Typography component="p">
                                  Mengetahui macam - macam teknik dalam network security.
                                </Typography>
                              </CardContent>
                            </CardActionArea>
                          </Card>
                        </Grid>


                      </Grid>

                    </Paper>
                  </Grid>
                  <Grid item xs></Grid>
                </Grid>
              </Paper>
            </Grid>
        </Grid>

        <Grid container xs={12} >
            <Grid name="contentContact" className={classes.someSpace} xs={12}>
              <Paper elevation="0" className="secondaryBackground">
              <Grid container lg>
                <Grid item xs></Grid>
                <Grid item xs={10}>
                  <Grid container justify="center">
                    <Typography className="primaryType" style={{ margin: "1vh 0 3vh 0" }} variant="h4" >Project and Certificate</Typography>
                  </Grid>
                  <Grid container spacing="16">

                    <Grid item xs={12} md={6} lg={3}>
                      <Card className={classes.card}>
                        <CardActionArea>
                          <CardMedia
                            className={classes.media}
                            image={perpusdigital}
                            title="Contemplative Reptile"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                              Frontoffice Perpustakaan Digital
                            </Typography>
                            <Typography component="p">
                              Membuat frontoffice perpustakaan digital dengan Laravel.
                            </Typography>
                          </CardContent>
                        </CardActionArea>

                      </Card>
                    </Grid>

                    <Grid item xs={12} md={6} lg={3}>
                      <Card className={classes.card}>
                        <CardActionArea>
                          <CardMedia
                            className={classes.media}
                            image={perpusdigitalbo}
                            title="Contemplative Reptile"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                              Backoffice Perpustakaan Digital
                            </Typography>
                            <Typography component="p">
                              Membuat backoffice perpustakaan digital dengan Laravel.
                            </Typography>
                          </CardContent>
                        </CardActionArea>

                      </Card>
                    </Grid>

                    <Grid item xs={12} md={6} lg={3}>
                      <Card className={classes.card}>
                        <CardActionArea>
                          <CardMedia
                            className={classes.media}
                            image={perpusdigitalmobilefo}
                            title="Contemplative Reptile"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                              Mobile Perpustakaan Digital Design
                            </Typography>
                            <Typography component="p">
                              Membuat desain perpustakaan digital untuk mobile apps dengan CorelDraw.
                            </Typography>
                          </CardContent>
                        </CardActionArea>

                      </Card>
                    </Grid>

                    <Grid item xs={12} md={6} lg={3}>
                      <Card className={classes.card}>
                        <CardActionArea>
                          <CardMedia
                            className={classes.media}
                            image={travelpoint}
                            title="Contemplative Reptile"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                              Frontoffice Travel Point Website
                            </Typography>
                            <Typography component="p">
                              Membuat frontoffice Travel Point dengan nativePHP.
                            </Typography>
                          </CardContent>
                        </CardActionArea>

                      </Card>
                    </Grid>

                    <Grid item xs={12} md={6} lg={3}>
                      <Card className={classes.card}>
                        <CardActionArea>
                          <CardMedia
                            className={classes.media}
                            image={sisteminformasi}
                            title="Contemplative Reptile"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                              Backoffice Sistem Informasi Siswa
                            </Typography>
                            <Typography component="p">
                              Membuat backoffice Sistem Informasi Siswa dengan nativePHP
                            </Typography>
                          </CardContent>
                        </CardActionArea>

                      </Card>
                    </Grid>

                    <Grid item xs={12} md={6} lg={3}>
                      <Card className={classes.card}>
                        <CardActionArea>
                          <CardMedia
                            className={classes.media}
                            image={pariwisata}
                            title="Contemplative Reptile"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                              Frontoffice Dinas Pariwisata Website
                            </Typography>
                            <Typography component="p">
                              Membuat frontoffice Dinas Pariwisata dengan Bootstrap.
                            </Typography>
                          </CardContent>
                        </CardActionArea>

                      </Card>
                    </Grid>

                    <Grid item xs={12} md={6} lg={3}>
                      <Card className={classes.card}>
                        <CardActionArea>
                          <CardMedia
                            className={classes.media}
                            image={mtcna}
                            title="Contemplative Reptile"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                              Basic Mikrotik Training (MTCNA) Certificate
                            </Typography>
                            <Typography component="p">
                              Mampu mengetahui tentang basic Mikrotik (MTCNA).
                            </Typography>
                          </CardContent>
                        </CardActionArea>

                      </Card>
                    </Grid>

                    <Grid item xs={12} md={6} lg={3}>
                      <Card className={classes.card}>
                        <CardActionArea>
                          <CardMedia
                            className={classes.media}
                            image={owlbookstore}
                            title="Contemplative Reptile"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                              Frontoffice Owl Bookstore Website
                            </Typography>
                            <Typography component="p">
                              Membuat frontoffice Owl Bookstore Point dengan HTML, CSS, dan JS
                            </Typography>
                          </CardContent>
                        </CardActionArea>

                      </Card>
                    </Grid>

                  </Grid>
                </Grid>
                <Grid item xs></Grid>
              </Grid>
              </Paper>
            </Grid>
        </Grid>

        <Grid  className="" justify="center" alignItems="center" container xs={12} >
            <Paper className="footerPaper primaryBackground">
              <Grid  className=""  container xs={12} >
                <Grid xs></Grid>
                <Grid container justify="center" alignItems="center" xs={2}>
                  <a className={classes.respFooterIcons} href="https://www.instagram.com/rifky.ari/"><img src={instagram}/></a>
                  <a className={classes.respFooterIcons} href="https://github.com/rifkyariy"><img src={github}/></a>
                </Grid>
                <Grid xs></Grid>
              </Grid>
            </Paper>
        </Grid>

      </Grid>

    </div>
  );
}

portfolio.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(portfolio);
