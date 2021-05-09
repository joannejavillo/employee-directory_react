import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
//import Alert from "../components/Alert";

class Search extends Component {
  state = {
    search: "",
    employee: [],
    results: [],
    error: ""
  };

  // When the component mounts, get a list of all available base employee and update this.state.employee
  componentDidMount() {
    API.getEmployee()
      .then(res => this.setState({ employee: res.data.message }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

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
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search By Employee!</h1>
          <Alert
            //type="danger"
            //style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
       </Alert>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            employee={this.state.employee}
          />
          <SearchResults results={this.state.results} />
        </Container>
      </div>
    );
  }
}

export default Search;
