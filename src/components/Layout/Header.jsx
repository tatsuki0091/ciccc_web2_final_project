import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <h3>Football Schedule</h3>
          </Navbar.Brand>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Serie A
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/laliga">
                  Liga Espanola
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cl">
                  Champions League
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link
                  className="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </Link>
              </li> */}
            </ul>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
