/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import footerData from "./FooterData";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function FooterCard() {
  return (
    <>
      {footerData.map((footerD, index) => (
        <Col key={index}>
          <p className="fs-6 fw-bold">{footerD.title}</p>
          {footerD.links && (
            <>
              {footerD.links.map((link, i) => (
                <Link
                  to={link.href}
                  target={link.target}
                  key={i}
                  className="nav-link"
                >
                  <small className="text-muted footer-anchor">{link.label}
                  </small>
                </Link>
              ))}
            </>
          )}
        </Col>
      ))}
    </>
  );
}

export default FooterCard;