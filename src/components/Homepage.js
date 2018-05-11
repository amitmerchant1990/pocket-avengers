import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';
import avengersData from '../Avengers';
import AppDrawer from './AppDrawer';
import { withRouter, Link } from 'react-router-dom';

class Homepage extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <AppDrawer/>
        <div className="homepageRoot">
          <GridList
            cellHeight={180}
            className="gridList"
          >
            {avengersData.map((tile) => (
              <Link to={`avenger-detail/${tile.id}`}>
              <GridTile
                key={tile.img}
                title={tile.title}
                subtitle={<span><b>{tile.tagline}</b></span>}
              >
                <img src={tile.img} />
              </GridTile>
              </Link>
            ))}
          </GridList>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(Homepage);
