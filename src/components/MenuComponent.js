import React, { Component } from 'react';
import {
    Card, CardImg, CardImgOverlay,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderMenuItem({ dish }) {
    const titleStyle = {
        'font-family': 'Montserrat',
        padding: '5px',
        background: 'linear-gradient(to bottom, #FFF8F8, #F8F8FF)',
        'box-shadow': '0px 0px 80px 0px grey',
        'border-radius': '5px',
        width: 'max-content'
    }
    return (
        <Card>
            <Link to={`/menu/${dish.id}`}>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay style={{ overflow: 'hidden' }}>
                    <CardTitle style={titleStyle}>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
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
                    <RenderMenuItem dish={dish} />
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
}

export default Menu;