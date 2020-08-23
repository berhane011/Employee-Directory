import React from "react";

function SearchForm(props) {
  return ( <div className ="container">
    <nav className="navbar navbar-light bg-light text-center">
    <form className="form-inline">
      <input
       className="form-control mr-sm-2"
         onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
         
          placeholder="Search For an employee"
          id="search"></input>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit"
   onClick={(e) =>props.handleFormSearch(e)}
      >Search</button>
    </form>
  </nav>
  </div>
    
  );
}

export default SearchForm;
