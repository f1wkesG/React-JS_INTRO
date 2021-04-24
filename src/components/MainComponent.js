import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Switch, Route, Redirect } from 'react-router-dom';
import { DISHES } from '../shared/dishes';
import Menu from './MenuComponent';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import Home from './HomeComponent';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }

    
    render() {

        return (
            <div className="App" >
                <div className="container">
                    <Header />
                    <Switch>
                        <Route path='/home' component={Home} />
                        <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes}/>} />
                        <Redirect to="/home" />
                    </Switch>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Main;
