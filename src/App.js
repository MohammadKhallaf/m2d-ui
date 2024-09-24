import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import logo from "./logo.svg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import ProductCard from "./components/ProductCard";
import { useEffect, useState } from "react";
import generateProducts from "./utils/generate-products";
import { Stack } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductGallery from "./pages/ProductGallery";
import { CartContext } from "./store/CartContext";
import CartPage from "./pages/CartPage";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // add to cart ( if product is not exist)
    // update quantity ( if product is  exist)

    setCart((prevState) => {
      // within the set State
      // condition
      const currentProduct = prevState.find((item) => {
        return item._id === product._id;
      });

      if (currentProduct) {
        // exist
        // new property
        currentProduct.quantity = currentProduct.quantity + 1;

        return [...prevState]; // عدلت اللي كان في السطر اللي فات
      } else {
        // مش موجود
        // currentProduct.quantity = 1; [X]
        // const newProduct = {
        //   ...product,
        //   quantity: 1,
        // };
        // product.quantity = 1;
        return [...prevState, { ...product, quantity: 1 }];
      }
    });
  };

  // remove from cart
  // bonus -> update qty
  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      <BrowserRouter>
        <div className="App">
          <CustomNavbar />

          <Stack
            direction="horizontal"
            className="w-100 justify-content-center align-items-center"
          >
            <Card className="w-75 mx-3 px-2 py-2 my-1">
              Some Hero section card
            </Card>
          </Stack>
          <Container className="p-4">
            <Routes>
              <Route path="/" element={<ProductGallery />} />
              <Route path="cart" element={<CartPage />} />
            </Routes>
          </Container>
        </div>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
