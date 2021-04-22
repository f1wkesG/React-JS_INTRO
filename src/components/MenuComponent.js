import React from 'react';
import {
    Card, CardImg, CardImgOverlay, CardTitle
} from 'reactstrap';

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
            <CardImgOverlay style={{ overflow:'hidden'}}>
                <CardTitle style={titleStyle}>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    )
}

const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={dish} onClick={props.onClick} />
            </div>
        );
    });

    return (
        <div className="row menu">
            {menu}
        </div>
    );
}

export default Menu;