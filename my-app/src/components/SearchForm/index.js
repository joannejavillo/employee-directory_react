import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props array
function SearchForm(props) {
  const filterFunction = (employee) => {
      if (props.search === "") {
        return true;
      }
      
  }
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="employee">Employee Name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="employee"
          list="employees"
          type="text"
          className="form-control"
          placeholder="Employee's name"
          id="employee"
        />

        <div id="employee">
          <table>
            <tr>
              <th>Picture</th>
              <th onClick= {props.nameFilter}>Name</th>
              <th>Last Name</th>
              <th>Country</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
            {props.employee.filter(filterFunction).map(employee => (
              <tr key={employee.email} >
                <td> <img src={employee.picture.thumbnail} alt="profile picture" /> </td>
                <td> {employee.name.first} </td>
                <td> {employee.name.last} </td>
                <td> {employee.location.country} </td>
                <td> {employee.email} </td>
                <td> {employee.phone} </td>
              </tr>

            ))}
          </table>
        </div>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
