import { BsBagHeartFill } from "react-icons/bs";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import styles from "./ProductCard.module.css";
import { Stack } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../store/CartContext";
import { BsCartPlusFill } from "react-icons/bs";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { WishlistContext } from "../App";

export default function ProductCard({ product }) {
  const { cart, addToCart } = useContext(CartContext);
  const { wishlist, addToWishlist, removeFromWishlist } =
    useContext(WishlistContext);

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
          <Button
            variant="success"
            className="align-items-center d-flex justify-content-center gap-2"
            onClick={() => addToCart(product)}
          >
            <BsCartPlusFill /> Add to cart
          </Button>
          <Button
            variant="warning"
            className="align-items-center d-flex justify-content-center gap-2"
            onClick={() => addToWishlist(product)}
          >
            <BsBagHeartFill />
            Add To Wishlist
          </Button>
          <Button
            variant="primary"
            className="align-items-center d-flex justify-content-center gap-2"
          >
            <BsFillInfoSquareFill />
            Details
          </Button>
        </Stack>
      </Card.Body>
    </Card>
  );
}
