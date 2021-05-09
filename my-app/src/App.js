import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
//import Container from "./components/Container";
//import Discover from "./pages/Discover";
//import About from "./pages/About";
import SearchForm from "./components/SearchForm";
import Navbar from "./components/Navbar";
//import Footer from "./components/Footer";
//import Wrapper from "./component/Wrapper";

function App() {
  //console.log('result')
  return (
    <Router>
      
        <Navbar/>
        <SearchForm/>
     
    </Router>
    
  );
}

export default App;
