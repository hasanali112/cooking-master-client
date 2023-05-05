import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './CSS/Shared.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadSpin from "./LoadSpin";

const ViewRecepe = () => {
  const cookDetail = useLoaderData();
  console.log(cookDetail);

  const handleClick = event => {
    event.currentTarget.disabled = true;
    console.log('button clicked');
    toast("Button click!")
  };

  const navigation = useNavigation()
   console.log(navigation)
   if(navigation.state === 'loading'){
    return <LoadSpin></LoadSpin>
   } 
  return (
    <div>
      <div className="bg-danger bg-opacity-25">
        <h1 className="text-center fw-bolder fw-1   p-5">Chef Recipes</h1>
      </div>
      <div className="bg-secondary bg-opacity-10 mb-5 p-3 container">
        <Container>
          <Row>
            <Col lg={5}>
              <img
                src={cookDetail.chef_picture}
                alt=""
                className="container-fluid rounded"
              />
            </Col>
            <Col lg={7}>
              <h4 className="mt-5 ms-3 fw-bolder fs-2">
                {cookDetail.chef_name}
              </h4>
              <h5 className="ms-3 text-secondary fw-semibold">
                Description: {cookDetail.bio}
              </h5>
              <h5 className="ms-3 text-secondary fw-semibold">
                Likes: {cookDetail.likes}
              </h5>
              <h5 className="ms-3 text-secondary fw-semibold">
                Recipes: {cookDetail.number_of_recipes}
              </h5>
              <h5 className="ms-3 text-secondary fw-semibold">
                Experience: {cookDetail.years_of_experience}
              </h5>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="cook-card">
        {cookDetail.recipes.map((recipe) => (
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{recipe.recipe_name}</Card.Title>
                <Card.Text>
                  {
                    recipe.ingredients.map(ingredient=>
                      <div>
                        <li>{ingredient}</li>
                      </div>
                      )
                  }

                  <div>
                     <p className="text-secondary mt-3 fw-bold">Method: <span className="text-left fw-semibold">{recipe.cooking_method}</span></p>
                  </div>
                   <p className="text-secondary mt-3 fw-bold">Rating: {recipe.rating}</p>
                </Card.Text>
                <Button onClick={handleClick} variant="danger">Favorite button</Button>
                <ToastContainer />
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewRecepe;
