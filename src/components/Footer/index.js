import React from "react";
import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="site-footer">
      <h6>Acerca</h6>
      <p className="text-justify-center">Rick & Morty API</p>

      <ul className="social-icons">
        <li>
          <a
            className="facebook"
            href="https://es-la.facebook.com/"
            target="_black"
          >
            <i className="fa fa-facebook">
              <BsFacebook />
            </i>
          </a>
        </li>
        <li>
          <a
            className="twitter"
            href="https://twitter.com/?lang=es"
            target="_black"
          >
            <i className="fa fa-twitter">
              <BsTwitter />
            </i>
          </a>
        </li>
        <li>
          <a
            className="dribbble"
            href="https://www.instagram.com/"
            target="_black"
          >
            <i className="fa fa-dribbble">
              <BsInstagram />
            </i>
          </a>
        </li>
        <li>
          <a
            className="linkedin"
            href="https://ar.linkedin.com"
            target="_black"
          >
            <i className="fa fa-linkedin">
              <BsLinkedin />
            </i>
          </a>
        </li>
      </ul>
      <p className="copyright-text">Derechos Reservados | QK-System™</p>
    </footer>
  );
};
export default Footer;
