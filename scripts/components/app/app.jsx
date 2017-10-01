import React from 'react';
import { Route, Link } from 'react-router-dom';
import RestaurantComponent from '../restaurant/restaurant_component';
import TableComponent from '../table/table_component';

const App = () => {
  return (
    <div>
      <Route exact path="/tables" component={RestaurantComponent}/>
      <Route path="/tables/:tableId" component={TableComponent}/>
    </div>
  );
};

export default App;
