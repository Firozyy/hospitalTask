import axios from "axios";
import React, { useEffect } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import EmployeeCard from "../../Compenents/EmployeeCard";
import { useSelector, useDispatch } from 'react-redux';
import { employeelist } from "../../redux/action/userActions";


const Employees = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {userInfo } = useSelector((state) => state.userLogin);

  const { employees, error, loading } = useSelector(state => state.employeeList)
console.log(employees);
  useEffect(() => {
    if(userInfo && userInfo.isAdmin){
        dispatch(employeelist())
    }else{
        navigate("/login")
    }


}, [dispatch,userInfo])
  return (
    <Container>
   <Row>
    {
employees && employees.map((user)=>(
    <Col sm={6} md={4} lg={3} >
    <EmployeeCard user={user}  />
    </Col>
))
    }
 

   </Row>
    </Container>
  );
};

export default Employees;
