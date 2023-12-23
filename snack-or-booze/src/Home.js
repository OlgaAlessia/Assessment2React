import React, { useState } from "react";
import "./Home.css";

import {
  Card, CardBody, CardTitle, ListGroup,
  Accordion, AccordionBody, AccordionHeader, AccordionItem,
} from "reactstrap";


function Home( { snacks, drinks }) {

  const [open, setOpen] = useState('');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };



  return (

    <section className="col-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle className="font-weight-bold">
            Welcome to Silicon Valley's premier dive cafe!
          </CardTitle>
        </CardBody>
      </Card>

      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">Snacks</AccordionHeader>
          <AccordionBody accordionId="1">
            <ListGroup>
              {snacks.map(snack => (
                <li key={snack.id}>{snack.name}</li>
              ))}
            </ListGroup>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">Drinks</AccordionHeader>
          <AccordionBody accordionId="2">
            <ListGroup>
              {drinks.map(drink => (
                <li key={drink.id}>{drink.name}</li>
              ))}
            </ListGroup>
          </AccordionBody>
        </AccordionItem>
      </Accordion>

    </section>



  );
}

export default Home;
