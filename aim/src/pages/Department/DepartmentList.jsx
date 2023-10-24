import axios from "axios";
import React, { useEffect } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import DepartmnetCard from "../../Compenents/DepartmnetCard";
import { useDispatch, useSelector } from "react-redux";
import { getallDepartment } from "../../redux/action/userActions";

const DepartmentList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.userLogin);

  const { departmnet, error, loading } = useSelector(
    (state) => state.departmnet
  );
  console.log(departmnet);
  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(getallDepartment());
    } else {
      navigate("/login");
    }
  }, [dispatch, userInfo]);
  return (
    <Container>
   <Row>
    {
departmnet && departmnet.map((item,i)=>(
    <Col key={i} sm={6} md={4}  >
    <DepartmnetCard item={item} />
    </Col>
))
    }
 

   </Row>
    </Container>
  );
};



export default DepartmentList