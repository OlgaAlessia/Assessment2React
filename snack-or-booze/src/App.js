import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import FormAddItem  from "./FormAddItem";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./FoodMenu";
import Snack from "./FoodItem";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);


  useEffect(() => {
    async function getItems() {
      let snacks = await SnackOrBoozeApi.getItems('snacks');
      setSnacks(snacks);
      let drinks = await SnackOrBoozeApi.getItems('drinks');
      setDrinks(drinks)
      setIsLoading(false);
    }
    getItems();
  }, [snacks, drinks]);


  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/addItem">
              <FormAddItem/>
            </Route>
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks} />
            </Route>
            <Route exact path="/snacks">
              <Menu category={'snacks'} items={snacks} title="Snacks" />
            </Route>
            <Route path="/snacks/:id">
              <Snack items={snacks} cantFind="/snacks" />
            </Route>
            <Route exact path="/drinks">
              <Menu category={'drinks'} items={drinks} title="Drinks" />
            </Route>
            <Route path="/drinks/:id">
              <Snack items={drinks} cantFind="/drinks" />
            </Route>
            <Route path='*'>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
