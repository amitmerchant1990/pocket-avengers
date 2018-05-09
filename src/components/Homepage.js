import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';
import avengersData from '../Avengers';
import AppDrawer from './AppDrawer';
import { BrowserRouter, Redirect, withRouter, Link } from 'react-router-dom';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    overflowY: 'hidden',
  },
  gridList: {
    width: 'auto',
    height: 'auto',
    overflowY: 'hidden',
  }
};

class Homepage extends Component {
  constructor(props){
    super(props);

    this.state = {
      redirect: false,
      id: null,
      open: false
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <AppDrawer/>
        <div style={styles.root}>
          <GridList
            cellHeight={180}
            style={styles.gridList}
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
