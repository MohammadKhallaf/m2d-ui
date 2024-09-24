import { useContext } from "react";
import { WishlistContext } from "../App";

function WishlistPage() {
  const { wishlist, addToWishlist, removeFromWishlist } =
    useContext(WishlistContext);
  return (
    <div className="py-3 py-md-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="shopping-cart">
              <div className="cart-header d-none d-sm-none d-mb-block d-lg-block">
                <div className="row">
                  <div className="col-md-6">
                    <h4>Products</h4>
                  </div>

                  <div className="col-md-2"></div>
                </div>
              </div>
              {wishlist.map((product) => {
                return (
                  <div className="cart-item">
                    <div className="row">
                      <div className="col-md-6 my-auto">
                        <a href="">
                          <label className="product-name">
                            <img
                              src={product.image}
                              style={{ width: 50, height: 50 }}
                              alt={product.title}
                            />
                            {product.title}
                          </label>
                        </a>
                      </div>
                      <div className="col-md-2 my-auto">
                        <label className="price">{product.price} EGP </label>
                      </div>

                      <div className="col-md-2 col-5 my-auto">
                        <div className="remove">
                          <button
                            onClick={() => {
                              removeFromWishlist(product);
                            }}
                            href=""
                            className="btn btn-danger btn-sm"
                          >
                            <i className="fa fa-trash" /> Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WishlistPage;
