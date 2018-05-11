import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import avengersData from '../Avengers'
import { withRouter } from 'react-router-dom';
import AppDrawer from './AppDrawer';

class AvengerDetail extends Component {

  render() {
    const {id} = this.props.match.params;
    var filterAvengers = avengersData.filter( element => element.id == id)

    return (
      <MuiThemeProvider>
        <AppDrawer/>
        <div className="avengersDetailRoot">
        {filterAvengers.map((tile) => (
        <Card>
            <CardMedia>
                <img src={('./'+tile.img)} alt={tile.title} />
            </CardMedia>
            <CardTitle title={tile.title} className="avengersDetailTitle" />
            <CardText>
                <div>
                    <div className="avengersDetailSection">{tile.desc}</div>
                    <div className="avengersDetailSection"><b><i>Real Name:</i></b> {tile.real_name}</div>
                    <div className="avengersDetailSection"><b><i>Powers:</i></b> {tile.powers}</div>
                    <div className="avengersDetailSection"><b><i>Abilities:</i></b> {tile.abilities}</div>
                    <div className="avengersDetailFooter"><i>Information based on <a href="https://www.marvel.com" target="_blank">Marvel.com</a></i></div>
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
