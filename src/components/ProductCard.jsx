import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import styles from "./ProductCard.module.css";
import { Stack } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../store/CartContext";

export default function ProductCard({ product }) {
  const { cart, addToCart } = useContext(CartContext);

  return (
    <Card style={{ width: "18rem" }} className={styles.card}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.description} -
          <b className="text-success"> {product.price} EGP</b>
        </Card.Text>
        <Stack gap={3}>
          <Button variant="success" onClick={() => addToCart(product)}>
            Add to cart
          </Button>
          <Button variant="primary">Details</Button>
        </Stack>
      </Card.Body>
    </Card>
  );
}
