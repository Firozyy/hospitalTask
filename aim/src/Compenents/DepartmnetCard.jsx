import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
function DepartmnetCard( {item} ) {
  console.log(item);
  return (
    <Card className="mb-3">
      <Link to={`/department/${item._id}`} style={{ textDecoration: "none" }}>
        <Card.Img variant="top" src={item.image.image_url} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
         
        </Card.Body>
      </Link>
    </Card>
  );
}


export default DepartmnetCard