import Card from "react-bootstrap/Card";

import { createContext, useState } from "react";
import { Stack } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import CartPage from "./pages/CartPage";
import ProductGallery from "./pages/ProductGallery";
import WishlistPage from "./pages/WishlistPage";
import { CartContext } from "./store/CartContext";

export const WishlistContext = createContext();

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

  const removeFromCart = (product) => {
    // filter
    setCart((prevArr) => {
      return prevArr.filter((item) => item._id !== product._id);
    });
  };

  const clearCart = () => {
    setCart([]);
  };
  // remove from cart
  // bonus -> update qty

  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (product) => {
    setWishlist((prevWishlistArr) => {
      const isProductInWishlist = prevWishlistArr.find(
        (item) => item._id === product._id
      );
      if (isProductInWishlist) {
        return prevWishlistArr;
      } else {
        return [...prevWishlistArr, product];
      }
    });
  };

  const removeFromWishlist = (product) => {
    setWishlist((prevWishlistArr) => {
      const newArr = prevWishlistArr.filter((item) => item._id !== product._id);
      return newArr;
    });
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      <WishlistContext.Provider
        value={{ wishlist, addToWishlist, removeFromWishlist }}
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
                <Route path="cart" element={<CartPage />} />
                <Route path="wishlist" element={<WishlistPage />} />
                <Route path="/" element={<ProductGallery />} />
              </Routes>
            </Container>
          </div>
        </BrowserRouter>
      </WishlistContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
