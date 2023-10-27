import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./section.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Section = () => {
  const navigate = useNavigate();
  const { loading, error, userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  }, [userInfo]);

  return (
    <Container className="section">
      <Row className="card-row pt-5">
        
      <Link to={"/department"} style={{ textDecoration: "none" }}>
          <Card className="mt-3 mb-3" style={{ width: "100" }}>
            <Card.Body>
              <Card.Title>Departments</Card.Title>
             
            </Card.Body>
          </Card>
        </Link>
        <Link to={"/employees"} style={{ textDecoration: "none" }}>
          <Card style={{ width: "100" }}>
            <Card.Body>
              <Card.Title>Employees</Card.Title>
              
            </Card.Body>
          </Card>
        </Link>
        <Link to={"/departmentHeads"} style={{ textDecoration: "none" }}>
          <Card className="mt-3" style={{ width: "100" }}>
            <Card.Body>
              <Card.Title>Department Heads</Card.Title>
              
            </Card.Body>
          </Card>
        </Link>
       
      </Row>
    </Container>
  );
};

export default Section;
