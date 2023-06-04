import React ,  { useContext }from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import {languageContext} from './../../context/language';


function NavBar() {

  var {language,setLanguage}=   useContext(languageContext);
  
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to='/'>Home</NavLink>
            <NavLink to="/Movies">Movies</NavLink>
            <NavLink to="/Favorite">Favorite</NavLink>
            <NavLink to="/AddUser">Login</NavLink>
            <NavLink to="/RegistrationForm">Register</NavLink>
          </Nav>
          

        </Container>
        <div onClick={()=> {   language==='en'?setLanguage('ar'):setLanguage('en')}} style={{color:'white'}}> language : {language} </div>
      </Navbar>
    </>
  );
}
export default NavBar;
