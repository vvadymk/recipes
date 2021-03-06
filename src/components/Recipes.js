import React from 'react';
import { Link } from 'react-router-dom'
import { Card, Button, Col } from 'react-bootstrap';
import faker from 'faker'
import services from "../services";

const Recipes = ({ id,name, category, shortDesc, createDate}) => {

    const deleteRecipe = async () => {
        try{
            await services.deleteRecipe(id);
            window.location.reload();
        }catch (error) {
            console.log(error);
        }
    };

    return (
        <Col md="auto">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={faker.image.food()} />
                <Card.Body>
                    <Card.Subtitle>{createDate}</Card.Subtitle>
                    <Link to={`/recipes/${id}`}>
                    <Card.Title>{name}</Card.Title>
                    </Link>
                    <Card.Subtitle>Category: {category}</Card.Subtitle>
                    <Card.Text>
                        {shortDesc}
                    </Card.Text>
                    <Link to={`/edit/${id}`}>
                        <Button
                            variant="primary"
                            style={{marginRight:"10px"}}
                        >
                            Edit
                        </Button>
                    </Link>
                    <Button
                        variant="danger"
                        onClick={deleteRecipe}
                    >
                        Delete
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    )
};

export default Recipes;
