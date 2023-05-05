import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { FaFilePdf } from "react-icons/fa";

const Blog = () => {
    const blogPdf =useRef()

    const generatePdf =  useReactToPrint({
        content:()=> blogPdf.current,
        documentTitle: 'bolgpage',
        onAfterPrint:()=> alert('Document print successfully')
    })
    return (
        <div>
            <h1 className='bg-danger bg-opacity-10 p-4 text-center'>Frequenty Asked Question</h1>
            <div ref={blogPdf} className='w-75 mx-auto mt-3'>
                <h1>1. <strong>Q:</strong> Tell us the differences between uncontrolled and controlled components.</h1>
                <p className='fw-2 fw-bold'><strong>Ans:</strong><span className='text-secondary '>controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</span></p>

                <h1>2. <strong>Q:</strong> How to validate React props using PropTypes
                </h1>

                <p className='fw-2 fw-bold'><strong>Ans:</strong><span className='text-secondary '>Props and PropTypes are important mechanisms for passing read-only attributes between React components.With React props, sending data to a component when call on that component, including numbers, strings, functions, objects, and arrays. If one have multiple components,  can do pass data from one component to another.
                To pass props between components,  add them when the component is called, just like would pass arguments when calling on a regular JavaScript function. <br />
                validate some step. <br />
                Step 1: Install PropTypes <br />
                Step 2: Import PropTypes <br />
                Step 3: Define Prop Types <br />
                Step 4: Use Your Component
                </span></p>

                <h1>3. <strong>Q:</strong> Tell us the difference between nodejs and express js.
                </h1>
                <p className='fw-2 fw-bold'><strong>Ans:</strong><span className='text-secondary '>NodeJS is a framework of JavaScript which is mainly used for working with the backend of our application or building the backend using JavaScript, whereas Express. js is used to develop complete web applications such as single-page, multi-page, and hybrid web applications and APIs.</span></p>



                <h1>4. <strong>Q:</strong> What is a custom hook, and why will you create a custom hook?
                </h1>
                <p className='fw-2 fw-bold'><strong>Ans:</strong><span className='text-secondary '>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</span></p>
            </div>

           <div className='w-50 mx-auto'>
           <button onClick={generatePdf} className='btn btn-danger w-25 mx-4 mb-5 mt-3 ms-5 fw-bold'><FaFilePdf/> Make it PDF</button> 
           </div>
        </div>
    );
};

export default Blog;