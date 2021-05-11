import React, { Component } from "react";
import API from "../utils/Api";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
//import Alert from "../components/Alert";

class Search extends Component {
  state = {
    search: "",
    employee: [],
    results: [],
    sortOrder: "asc",
    error: ""
  };

  // When the component mounts, get a list of all available base employee and update this.state.employee
  componentDidMount() {
    API.getEmployee()
      .then(res => {
        console.log(res)
        this.setState({ employee: res.data.results })
      })
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  nameFilter = () => {
    console.log("working")
    if (this.state.sortOrder === "asc") {
      this.setState({
        employee: this.state.employee.sort((a, b) => (a.name.first > b.name.first) ? 1 : ((b.name.first > a.name.first) ? -1 : 0)),
        sortOrder: "dsc"
      })
    }
    else {
      this.setState({
        employee: this.state.employee.sort((a, b) => (a.name.first > b.name.first) ? -1 : ((b.name.first > a.name.first) ? 1 : 0)),
        sortOrder: "asc"
      })
    }
  }
 

  handleFormSubmit = event => {
    event.preventDefault();
    API.getEmployee(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };
  render() {
    console.log(this.state.employee);
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search By Employee!</h1>

          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            search={this.state.search}
            employee={this.state.employee}
            nameFilter={this.nameFilter}
          />
          <SearchResults results={this.state.results} />
        </Container>
      </div>
    );
  }
}

export default Search;
