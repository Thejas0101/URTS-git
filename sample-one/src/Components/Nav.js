// import * as ReactBootstrap from "react-bootstrap";
// function Navbar(){
// return(
// <div>
//     <ReactBootstrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
// <ReactBootstrap.Container>
// <ReactBootstrap.Navbar.Brand href="Home">TT-RS</ReactBootstrap.Navbar.Brand>
// <ReactBootstrap.Navbar.Toggle aria-controls="responsive-ReactBootstrap.Navbar-ReactBootstrap.Nav" />
// <ReactBootstrap.Navbar.Collapse id="responsive-ReactBootstrap.Navbar-ReactBootstrap.Nav">
//   <ReactBootstrap.Nav className="me-auto">
//     <ReactBootstrap.Nav.Link href="Trainlist"><b>Train list</b></ReactBootstrap.Nav.Link>
//     <ReactBootstrap.Nav.Link href="Booktik"><b>Book Tickets</b> </ReactBootstrap.Nav.Link>
//   </ReactBootstrap.Nav>
//   <ReactBootstrap.Nav>

//   <ReactBootstrap.Nav.Link href="Login"><h4><b>Logout</b></h4> </ReactBootstrap.Nav.Link>
//   <ReactBootstrap.Nav.Link eventKey={2} href="Contact"><h4><b> Contact_Us</b></h4>
    
     
//     </ReactBootstrap.Nav.Link>
//   </ReactBootstrap.Nav>
// </ReactBootstrap.Navbar.Collapse>
// </ReactBootstrap.Container>
// </ReactBootstrap.Navbar></div>)
// }
// export default Navbar;



import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import * as ReactBootstrap from "react-bootstrap"

function TTRSNav() {
  return (
    <ReactBootstrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <ReactBootstrap.Container>
        <ReactBootstrap.Navbar.Brand href="Home"><h5>UT-BS</h5></ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootstrap.Nav className="me-auto">
            <ReactBootstrap.Nav.Link href="Trainlist">Train list</ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link href="Booktik">Book Ticket</ReactBootstrap.Nav.Link>
            
          </ReactBootstrap.Nav>
          <ReactBootstrap.Nav>
          <ReactBootstrap.Nav.Link href="History">Booking History</ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link href="Contact">Contact Us</ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link eventKey={2} href="Login">
              Logout
            </ReactBootstrap.Nav.Link>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar.Collapse>
      </ReactBootstrap.Container>
    </ReactBootstrap.Navbar>
  );
}

export default TTRSNav;