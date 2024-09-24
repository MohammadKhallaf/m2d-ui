import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { CartContext } from "../store/CartContext";
import { Badge } from "react-bootstrap";
import { WishlistContext } from "../App";

function CustomNavbar() {
  const { cart, addToCart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          M2 ECommerce
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/wishlist">
            Wishlist
            <Badge bg="warning" text="dark">
              {wishlist.length}
            </Badge>
          </Nav.Link>
          <Nav.Link as={Link} to="/cart">
            Cart{" "}
            <Badge bg="warning" text="dark">
              {cart.length}
            </Badge>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
