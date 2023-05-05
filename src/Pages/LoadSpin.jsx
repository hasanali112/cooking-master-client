import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const LoadSpin = () => {
    return (
        <div className='w-25 mx-auto mt-5'>
            <Spinner animation="border" variant="primary" />
        </div>
    );
};

export default LoadSpin;