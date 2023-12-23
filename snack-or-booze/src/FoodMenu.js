import React from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import { Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem } from "reactstrap";


/**
 * 
 * @param {category, items} category can be drinks or snacks, items is the array of the category passed 
 * @returns 
 */
function FoodMenu({ category, items }) {
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Food Menu
          </CardTitle>
          <CardText>
            This is the list of ours {category}:
          </CardText>
          <ListGroup>
            {items.map(item => (
              <Link to={`/${category}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

//<Link to={`/snacks/${snack.id}`} key={snack.id}>

export default FoodMenu;
