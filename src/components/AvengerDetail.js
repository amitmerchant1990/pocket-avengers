import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import avengersData from '../Avengers'
import { BrowserRouter, Redirect, withRouter, Link } from 'react-router-dom';
import AppDrawer from './AppDrawer';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  fontStyle:{
      
  },
  sectionPadding:{
    padding: '8px',
    fontSize: '20px'
  },
  footer: {
    paddingTop: '50px',
    textAlign: 'center'
  },
  cardTitle: {
    textAlign: 'center',
    fontWeight: 'bold'
  }
};

class AvengerDetail extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {id} = this.props.match.params;
    var filterAvengers = avengersData.filter( element => element.id == id)

    return (
      <MuiThemeProvider>
        <AppDrawer/>
        <div style={styles.root}>
        {filterAvengers.map((tile) => (
        <Card>
            <CardMedia>
                <img src={('./'+tile.img)} alt="" />
            </CardMedia>
            <CardTitle title={tile.title} style={styles.cardTitle} />
            <CardText>
                <div style={styles.fontStyle}>
                    <div style={styles.sectionPadding}>{tile.desc}</div>
                    <div style={styles.sectionPadding}><b><i>Real Name:</i></b> {tile.real_name}</div>
                    <div style={styles.sectionPadding}><b><i>Powers:</i></b> {tile.powers}</div>
                    <div style={styles.sectionPadding}><b><i>Abilities:</i></b> {tile.abilities}</div>
                    <div style={styles.footer}><i>Information based on <a href="https://www.marvel.com" target="_blank">Marvel.com</a></i></div>
                </div>
            </CardText>
        </Card>
        ))}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(AvengerDetail);
