import React, { useEffect } from "react";
import { Button, Col, Container, Image, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getDepartmentDetails } from "../../redux/action/userActions";

import "./style.css";
const DepartmentDetails = () => {
    const { loading, error, department } = useSelector(state => state.departmentDetails)
    const {  userInfo } = useSelector((state) => state.userLogin);
  const { id } = useParams();
  const navigate=useNavigate()
  const dispatch = useDispatch();
  useEffect(() => {
    if(!userInfo){
      navigate("/login")
    }
    dispatch(getDepartmentDetails(id));
  }, [id,userInfo]);


  return (

    <Container>
      <Row>
       
        
        {department && <>
        <Col md={8}>
          <div >
            <h3 className="depname mb-2">{department.name}</h3>
            <h5 className="yeasroffound mb-3 ">Year of Found {department.yearFound}</h5>
            <div>
              <p>
              {department.desc}
              </p>
             
            </div>
            {/* <div className="mb-3 mt-3">
                <Button className="boxbutton me-3">Department</Button>
                <Button className="boxbutton">Report To</Button>
            </div> */}
          </div>
        </Col>
        <Col md={4}>
          <Image className="w-100" src={department?.image.image_url} />
        </Col>
       </>}
      </Row>
    </Container>
  );
};




export default DepartmentDetails