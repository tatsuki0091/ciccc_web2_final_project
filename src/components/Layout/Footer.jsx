import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start bg-dark text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between">
          <div>
            <Link to="" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </Link>
            <Link to="" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </Link>
            <Link to="" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </Link>
          </div>
        </section>

        <div className="text-center p-4">
          © 2021 Copyright: Tatsuki Yamatani
        </div>
      </footer>
    </>
  );
};

export default Footer;
