import { Col, Row } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";

function ProductGallery() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/products").then((response) => {
      setProducts(response.data);
    });
  }, []); // initial render

  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {products.map((item, idx) => (
        <Col key={item._id}>
          <ProductCard product={item} />
        </Col>
      ))}
    </Row>
  );
}
export default ProductGallery;
