import { Col, Row } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import generateProducts from "../utils/generate-products";
import { useEffect, useState } from "react";

function ProductGallery() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const list = generateProducts(38);
    setProducts(list);
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
