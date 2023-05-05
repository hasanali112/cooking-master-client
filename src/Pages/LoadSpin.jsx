import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const LoadSpin = () => {
    return (
        <div className='container w-25 mx-auto mt-5 d-flex'>
            <Spinner animation="border" variant="primary" />
            <Spinner animation="border" variant="secondary" />
            <Spinner animation="border" variant="success" />
        </div>
    );
};

export default LoadSpin;