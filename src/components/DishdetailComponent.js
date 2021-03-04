import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';


const RenderDish = ({ dish }) => {
    if (dish != null)
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    else
        return (
            <div></div>
        );
}

const RenderComments = ({ dish }) => {
    if (dish != null) {
        return (
            <div>
                <h4>Comments</h4>
                {dish.comments.map((comment) => {
                    return (
                        <ul className="list-unstyled">
                            <li>{comment.comment}</li>
                            <li>-- {comment.author}, {comment.date}</li>
                        </ul>
                    )
                })}
            </div>
        )
    }
    else
        return (
            <div></div >
        );
}

const DishDetail = (props) => {
    return (
        <div className="row">
            <div className="col-12 col-md-5 m-1">
                <RenderDish dish={props.dish} />
            </div>
            <div className="col-12 col-md-5 m-1">
                <RenderComments dish={props.dish} />
            </div>
        </div>
    )
}

export default DishDetail;