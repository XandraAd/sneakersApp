/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Row } from "react-bootstrap";
import FooterCard from "./FooterCard";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Footer() {

  return (
    <>
      <Container
        fluid
        as={Box}
        // minH={"70vh"}
        className="d-flex flex-column gap-5 justify-content-center align-items-center footer"
      >
          <Container className="mt-5">
            <Row className="p-5" style={{boxShadow: "3px 3px 5px 2px rgba(255,125,26,0.10)"}}>
              <FooterCard />
            </Row>
          </Container>
          <Container fluid className="mt-auto py-4 d-flex gap-4 flex-row justify-content-center" as={Box}>
            <Link><small className="footer-anchor">Data Settings</small></Link>
            |
            <Link><small className="footer-anchor">Do not sell my personal information</small></Link>
            |
            <Link><small className="footer-anchor">Privacy Policy</small></Link>
            |
            <Link><small className="footer-anchor">Terms and Conditions</small></Link>
          </Container>
      </Container>
    </>
  );
}

export default Footer;