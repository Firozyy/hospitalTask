import React, { useEffect } from "react";
import { Button, Col, Container, Image, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getEmployeeDeatils } from "../../redux/action/userActions";

import "./style.css";
const EmployeDetails = () => {
    const { loading, error, employee } = useSelector(state => state.employeeDetails)
    const {  userInfo } = useSelector((state) => state.userLogin);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if(!userInfo){
      navigate("/login")
    }
    dispatch(getEmployeeDeatils(id));
  }, [id,userInfo]);


  return (
    <Container>
      <Row>
        <h3 className="mb-3">Eployee Details</h3>
        
       {employee && <>
        <Col md={8}>
          <div className="">
            <Table striped bordered hover>
              
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>{employee.name}</td>
                  
                </tr>
                <tr>
                  <td>age</td>
                  <td>{employee.age}</td>
                </tr>
                <tr>
                  
                  <td >EmpId</td>
                  <td>{employee.empId}</td>
                </tr>
                <tr>
                 
                  <td >Email</td>
                  <td>{employee.email}</td>
                </tr>
              </tbody>
            </Table>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga delectus voluptatem ullam est velit, obcaecati possimus sed. Aut, officiis quae, enim est tenetur autem optio accusamus ad accusantium, facilis blanditiis?
            </div>
            <div className="mb-3 mt-3">
              <Link to={`/department/${employee.department.id}`}>
              <Button className="boxbutton me-3">{employee.department.name}</Button>
              </Link>
                
                <Button className="boxbutton">Departmnet Head</Button>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <Image className="w-100" src={employee?.image.image_url} />
        </Col>
       </>}
      </Row>
    </Container>
  );
};

export default EmployeDetails;
