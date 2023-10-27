import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./style.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDepartmentHeaDetails } from "../redux/action/userActions";
function Cards({ id }) {
  const dispatch = useDispatch();
  const { departmentHead } = useSelector(
    (state) => state.departmentHeadDetails
  );
  useEffect(() => {
    dispatch(getDepartmentHeaDetails(id));
  }, [id]);
console.log(departmentHead);
  return (
   
      <Card className="mb-3"  style={{ width: '18rem' }}>
        {departmentHead && 

        
    <Link to={`/departmentheads/${departmentHead._id}`} style={{ textDecoration: "none" }}>
        <Card.Img variant="top" src={departmentHead.image.image_url} />
        <Card.Body>
          <Card.Title className="text-success">{departmentHead.name}</Card.Title>
         

       
        </Card.Body>
      </Link> 
 }
    </Card>
    
    
  );
}

export default Cards;
