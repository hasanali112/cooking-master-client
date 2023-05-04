import React from 'react';
import background from '../assets/404page.jpg'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='w-50 mx-auto'>
            <img src={background} alt=""  className='container-fluid'/>
            <div className='d-flex align-items-center justify-content-center'>
              <Link to='/'>
                  <Button variant="danger mt-5">Back to Home</Button>
              </Link>
             
            </div>
            
        </div>
    );
};

export default Error;