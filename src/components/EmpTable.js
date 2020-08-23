import React from "react";

function EmpTable(props) {
  return (

    
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">name</th>
            <th scope="col">phone </th>
            <th scope="col">email</th>
            <th scope="col">dob</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th > <img src={props.image} alt="img" width ="100"></img> 
            </th>
            <td>{props.name}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{props.dob}</td>
          </tr>
         
        </tbody>
      </table>
    </div>
  );
}

export default EmpTable;
