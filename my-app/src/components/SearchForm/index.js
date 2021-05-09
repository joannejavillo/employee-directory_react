import React from "react";
//import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="employees">Employee Name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="employees"
          list="employees"
          type="text"
          className="form-control"
          placeholder="Employee's name"
          id="employees"
        />
        <datalist id="employees">
          {props.employees.map(employees => (
            <option value={employees} key={employees} />
          ))}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
