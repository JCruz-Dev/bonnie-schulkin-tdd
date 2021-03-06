import React from 'react';
import Col from 'react-bootstrap/Col';

const ToppingOption = ({ name, imagePath }) => {
    return (
        <Col xs={12} sm={6} md={4} lg={3}>
            <img
                src={`http://localhost:3030/${imagePath}`}
                alt={`${name} topping`}
            />
        </Col>
    );
};

export default ToppingOption;
