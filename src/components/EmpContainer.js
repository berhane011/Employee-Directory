import React, { Component } from "react";
import SearchForm from "./SearchForm";
import employees from "../employees.js";
import EmpTable from "./EmpTable";
import Title from "./Title";

class EmpContainer extends Component {
  state = {
    employees,
    search: "",
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
    if(event.target.value === ""){
      this.setState({employees})
      }
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSearch = (e) => {
    if(!this.state.search){
      return;
    }
    e.preventDefault();
    const employees = this.state.employees.filter(
      (employee) => employee.name === this.state.search
    );
    this.setState({ employees });

    
  };

  render() {
    console.log('this.state.employees', this.state.employees);
    return (
      <>
        <Title />
        <SearchForm
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSearch={this.handleFormSearch}
        />

        {this.state.employees.map((item) => (
          <EmpTable
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            phone={item.phone}
            email={item.email}
            dob={item.dob}
          />
        ))}
      </>
    );
  }
}

export default EmpContainer;
