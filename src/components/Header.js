import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import s from "../style.module.css"; // Ensure this path is correct

const Header = () => {
  return (
    <header className={`bg-dark text-white py-3 ${s.header}`}>
      <Container fluid className={s.container}>
        <Row className="align-items-center">
          <Col xs={3} lg={2} className={`${s.logoCol} text-start`}>
            <h2 className={s.logo}>EY Projects</h2>
          </Col>
          <Col
            xs={6}
            lg={8}
            className={`d-flex justify-content-center ${s.searchCol}`}
          >
            <input
              type="text"
              placeholder="Search Projects..."
              className={`form-control ${s.searchBox}`}
            />
          </Col>
          <Col xs={3} lg={2} className={`text-end ${s.profilePicCol}`}>
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className={`rounded-circle ${s.profilePic}`}
            />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
