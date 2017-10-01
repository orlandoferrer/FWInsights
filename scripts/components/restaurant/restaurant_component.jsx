import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantComponent = () => {

  // sample restaurant layout
  let tables = [];
  let customers = [0, 1, 2, 3, 4];
  for (let i = 1; i <= 20; i++) {
    let tableNumber = i;
    let tableCount = Math.floor(Math.random() * customers.length);
    tables.push([tableNumber, tableCount]);
  }


  return (
    <div>
      <div className="restaurant-div">
        {
          tables.map((table) => {
            return (
              <div
                className={["restaurant-table",
                  table[1] > 0 ? "occupied-table" : "empty-table"].join(' ')}
                id={`table-${table[0]}`}
                key={`table-${table[0]}`}>
                <Link to={`/tables/${table[0]}`}>
                  <p>Table {table[0]}</p>
                  <p>Customers: {table[1]}</p>
                </Link>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default RestaurantComponent;
