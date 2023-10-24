import axios from "axios";
import React, { useEffect } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import DepartmentHeadcard from "../../Compenents/DepartmentHeadcard";
import { getallDepartmentHeadlist } from "../../redux/action/userActions";
import { useDispatch, useSelector } from "react-redux";
const baseURL = "https://dummyjson.com/users";

const DepartHeadlist = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.userLogin);

  const { departmnetHead, error, loading } = useSelector(
    (state) => state.departmnetHead
  );

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(getallDepartmentHeadlist());
    } else {
      navigate("/login");
    }
  }, [dispatch, userInfo]);
  return (
    <Container>
      <Row>
        {departmnetHead &&
          departmnetHead.map((item, i) => (
            <Col key={i} sm={6} md={4} lg={3} >
              <DepartmentHeadcard item={item} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default DepartHeadlist;
