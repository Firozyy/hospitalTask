import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./style.css"
function DepartmentHeadcard( {item} ) {

  return (
    <Card className="mb-3">
      <Link to={`/departmentheads/${item._id}`} style={{ textDecoration: "none" }}>
        <Card.Img variant="top" src={item.image.image_url} />
        <Card.Body>
          <Card.Title className="text-success">{item.name}</Card.Title>
          <p className="text-dark">  EmpID {item.empId}</p>

          <Button  variant="success">click</Button>
        </Card.Body>
      </Link>
    </Card>
  );
}


export default DepartmentHeadcard