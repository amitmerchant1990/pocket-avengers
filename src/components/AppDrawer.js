import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { withRouter, Link } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  linkPrefs: {
      textDecoration: 'none'
  }
};

class AppDrawer extends Component {
    constructor(props){
        super(props);

        this.state = {
            open: false
        }
    }

    handleOpen = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});
  
    render() {
        return (
            <AppBar
            title={<img src="./images/logo.png" width="130" height="70" />}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            style={{textAlign: 'center'}}
            onLeftIconButtonClick = { this.handleOpen.bind(this) }
            position="fixed"
            >
                <Drawer
                docked={false}
                width={200}
                open={this.state.open}
                onRequestChange={(open) => this.setState({open})}
                style={{textAlign: 'left'}}
                >
                    <Link to={`/`} style={styles.linkPrefs}>
                        <MenuItem>Home</MenuItem>
                    </Link>
                    <Link to={`/about`} style={styles.linkPrefs}>
                        <MenuItem>About</MenuItem>
                    </Link>
                    <a href="https://www.github.com" style={styles.linkPrefs}>
                        <MenuItem>GitHub</MenuItem>
                    </a>
                </Drawer>
            </AppBar>
        );
    }
}

export default withRouter(AppDrawer);
