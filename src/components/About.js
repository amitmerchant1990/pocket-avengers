import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardText} from 'material-ui/Card';
import { withRouter } from 'react-router-dom';
import AppDrawer from './AppDrawer';

const About = () => {
 
    return (
        <MuiThemeProvider>
        <AppDrawer/>
        <div className="aboutRoot">
            <Card>
                <CardText>
                    <div className="cardStyle">
                        <div className="aboutAppTitle">Pocket Avengers</div>
                        <div className="aboutSectionPadding">A central place to learn about Marvel's Avengers</div>
                        <div className="aboutSectionPadding">Made with ❤ by <a href="https://www.amitmerchant.com" target="_blank">Amit Merchant</a></div>
                        <div className="aboutSectionPadding"><a href="https://www.github.com/amitmerchant1990/pocket-avengers">GitHub</a></div>
                        <div className="aboutFooter"><i>*Avengers and it's logo are registered properties of <a href="https://www.marvel.com">Marvel</a></i></div>
                    </div>
                </CardText>
            </Card>
        </div>
        </MuiThemeProvider>
    );
}

export default withRouter(About);
