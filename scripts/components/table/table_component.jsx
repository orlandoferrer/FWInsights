import React from 'react';

const TableComponent = () => {

  // sample customers for demo
  let customers = [2, 3, 4];
  let randomIndex = Math.floor(Math.random() * customers.length);
  let randomCustomer = customers[randomIndex];

  let sampleCustomers = [];
  for (let i = 1; i <= randomCustomer; i++) {
    sampleCustomers.push(1);
  }


  return (
    <div>
      <div className="table-div">
        {
          sampleCustomers.map((el) => {
            return (
              <div className="customer-place">
              <img src="./images/glass.png" class="customer-glass"/>
                {/*<div className="customer-glass"/>*/}
              <img src="./images/plate2.png" class="customer-plate"/>  
                {/*<div className="customer-plate"/>*/}
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default TableComponent;
