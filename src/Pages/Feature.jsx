import React from 'react';
import Card from "react-bootstrap/Card";
import { BsFillCalendar3EventFill, BsFillPaletteFill, BsFillPeopleFill, BsFillCupHotFill} from "react-icons/bs";

const Feature = () => {
    return (
        <div>
             <div className="mt-5 ms-5 me-5">
        <h1 className="mt-5 text-center fw-bolder">Get a many interesting features</h1>
        <p className="mt-3 text-center fw-bold text-secondary">
          Here you find beat deal our food iteam like menu food variation fast
          food other so on. <br /> Tested and perfected recipes that work for you the
          very first time
        </p>
        <div className="d-lg-flex mt-5 lg-ms-5 me-5">
          <Card
            border="light"
            style={{ width: "18rem" }}
            className="me-3 lg-ms-4 shadow-sm p-3 mb-5 bg-body rounded"
          >
            <Card.Body className="text-center">
              <BsFillCalendar3EventFill/>
              <Card.Title className="mt-2">Menu varient</Card.Title>
              <Card.Text className="text-secondary">
                You can find here your favourite foods
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            border="light"
            style={{ width: "18rem" }}
            className="me-3 shadow-sm p-3 mb-5 bg-body rounded"
          >
            
            <Card.Body className="text-center">
              <BsFillPaletteFill/>
              <Card.Title className="mt-2">Cooking Warw</Card.Title>
              <Card.Text className="text-secondary">
              Warw colored trivets is well worth the money, especially if you have Fiesta.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            border="light"
            style={{ width: "18rem" }}
            className="me-3 shadow-sm p-3 mb-5 bg-body rounded"
          >
            <Card.Body className="text-center">
                <BsFillPeopleFill/>
              <Card.Title className="mt-2">Best Chef</Card.Title>
              <Card.Text className="text-secondary">
                All famous chef work here. They cooked very well and our customers very satisfied.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            border="light"
            style={{ width: "18rem" }}
            className="me-4 shadow-sm p-3 mb-5 bg-body rounded"
          >
            <Card.Body className="text-center">
                <BsFillCupHotFill/>
              <Card.Title className="mt-2">Fast Food</Card.Title>
              <Card.Text className="text-secondary">
                Famous fast food find here. You can purchas very chipest rate.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
        </div>
    );
};

export default Feature;