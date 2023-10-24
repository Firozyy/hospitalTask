import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./style.css"
function EmployeeCard({ user }) {

  return (
    <Card className="mb-3" >
      <Link to={`/employees/${user._id}`} style={{ textDecoration: "none" }}>
        <Card.Img variant="top" src={user.image.image_url} />
        <Card.Body>
          <Card.Title className="text-success">{user.name}</Card.Title>
          <p className="text-dark">ID {user?.empId}</p>

          <Button variant="success">Details</Button>
        </Card.Body>
      </Link>
    </Card>
  );
}

export default EmployeeCard;
