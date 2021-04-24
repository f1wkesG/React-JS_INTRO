import React, { Component } from 'react';
import {
    Card, CardImg, CardImgOverlay, CardTitle
} from 'reactstrap';
import DishDetail from './DishdetailComponent';

function RenderMenuItem({ dish, onClick }) {
    const titleStyle = {
        'font-family': 'Montserrat',
        padding: '5px',
        background: 'linear-gradient(to bottom, #FFF8F8, #F8F8FF)',
        'box-shadow': '0px 0px 80px 0px grey',
        'border-radius': '5px',
        width: 'max-content'
    }
    return (
        <Card onClick={() => onClick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay style={{ overflow: 'hidden' }}>
                <CardTitle style={titleStyle}>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    )
}

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null,
        };
        this.onDishSelect = this.onDishSelect.bind(this);
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <RenderMenuItem dish={dish} onClick={this.onDishSelect} />
                </div>
            );
        });

        return (
            <div>
                <div className="row" >
                    {menu}
                </div>
                <DishDetail dish={this.props.dishes.filter((dish) => (dish.id === this.state.selectedDish))[0]} />
            </div>
        );
    }
}

export default Menu;