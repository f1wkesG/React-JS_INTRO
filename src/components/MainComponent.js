import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { DISHES } from '../shared/dishes';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Footer from './FooterComponent';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }

    render() {
        return (
            <div className="App" >
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">TEST App</NavbarBrand>
                    </div>
                </Navbar>
                <div className="container">
                    <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
                    <DishDetail dish={this.state.dishes.filter((dish) => (dish.id === this.state.selectedDish))[0]} />
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default Main;
