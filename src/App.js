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

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevState) => {
      return [...prevState, product];
    });
  };
  // remove from cart
  // bonus -> update qty
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
      }}
    >
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
            </Routes>
          </Container>
        </div>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
