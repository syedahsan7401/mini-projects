import React from 'react'
import { Navbar, Nav, Form, Button, Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Counter from '../pages/Counter'
import BMIcalculator from '../pages/BMIcalculator'
import Stopwatch from '../pages/Stopwatch'
import Axios from '../pages/Axios'
import Error from '../pages/Error'
import TodoApp from '../pages/TodoApp'
import Whiteboard from '../pages/Whiteboard'
import Codepen from '../pages/Codepen/App'

const NavbarComp = () => {
  return (
    <>
      <Router>
        <Navbar expand="lg" className="navbar navbar-secondary bg-secondary">
          <Container fluid>
            <Navbar.Brand href="#">MiniProjects</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link as={Link} to={"/"} >Counter</Nav.Link>
                <Nav.Link as={Link} to={"/bmicalculator"} >BMIcalculator</Nav.Link>
                <Nav.Link as={Link} to={"/stopwatch"} >Stopwatch</Nav.Link>
                <Nav.Link as={Link} to={"/axios"} >Axios</Nav.Link>
                <Nav.Link as={Link} to={"/todoApp"} >TodoApp</Nav.Link>
                <Nav.Link as={Link} to={"/whiteboard"} >Whiteboard</Nav.Link>
                <Nav.Link as={Link} to={"/codepen"} >Codepen</Nav.Link>


              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-light">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div>
          <Routes>
            <Route path="/" element={<Counter />} />
            <Route path="/bmicalculator" element={<BMIcalculator />} />
            <Route path="/stopwatch" element={<Stopwatch />} />
            <Route path="/axios" element={<Axios />} />
            <Route path="/todoapp" element={<TodoApp />} />
            <Route path="/whiteboard" element={<Whiteboard />} />
            <Route path="/codepen" element={<Codepen />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default NavbarComp