import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { withRouter } from 'react-router-dom';
import AppDrawer from './AppDrawer';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url(images/cover.jpg)',
    backgroundSize: 'cover',
    height: '100vh'
  },
  cardStyle: {
    textAlign: 'center'
  },
  appTitle: {
      fontSize: '25px',
      fontWeight: 'bold',
      padding: '10px'
  },
  sectionPadding:{
    paddingTop: '8px',
    fontSize: '17px'
  },
  footer: {
    paddingTop: '40px'
  }
};

class About extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <MuiThemeProvider>
        <AppDrawer/>
        <div style={styles.root}>
            <Card>
                <CardText>
                    <div style={styles.cardStyle}>
                        <div style={styles.appTitle}>Pocket Avengers</div>
                        <div style={styles.sectionPadding}>A central place to learn about Marvel's Avengers</div>
                        <div style={styles.sectionPadding}>Made with ❤ by <a href="https://www.amitmerchant.com" target="_blank">Amit Merchant</a></div>
                        <div style={styles.sectionPadding}><a href="https://www.github.com/amitmerchant1990/pocket-avengers">GitHub</a></div>
                        <div style={styles.footer}><i>*Avengers and it's logo are registered properties of <a href="https://www.marvel.com">Marvel</a></i></div>
                    </div>
                </CardText>
            </Card>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(About);
