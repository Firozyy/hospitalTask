import React, { useEffect } from "react";
import { Button, Col, Container, Image, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDepartmentHeaDetails } from "../../redux/action/userActions";

import "./style.css";
const DepartHeadDetails = () => {
    const { loading, error, departmentHead } = useSelector(state => state.departmentHeadDetails)
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDepartmentHeaDetails(id));
  }, [id]);

console.log(departmentHead?.image.image_url);
  return (
  
    <Container>
      <Row>
        <h3 className="mb-3">Deprtmnet Head Details</h3>
        
       {departmentHead && <>
        <Col md={8}>
          <div className="">
            <Table striped bordered hover>
              
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>{departmentHead.name}</td>
                  
                </tr>
                <tr>
                  <td>age</td>
                  <td>{departmentHead.age}</td>
                </tr>
                <tr>
                  
                  <td >EmpId</td>
                  <td>{departmentHead.empId}</td>
                </tr>
                <tr>
                 
                  <td >Email</td>
                  <td>{departmentHead.email}</td>
                </tr>
              </tbody>
            </Table>
            <div>
              {departmentHead.profileDesc}
            </div>
            <Link to={`/department/${departmentHead.department.id}`}>
              <Button className="boxbutton me-3">{departmentHead.department.name}</Button>
              </Link>
          </div>
        </Col>
        <Col md={4}>
          <Image className="w-100" src={departmentHead?.image.image_url} />
        </Col>
       </>}
      </Row>
    </Container>
  );
};



export default DepartHeadDetails