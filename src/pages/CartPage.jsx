import { useContext } from "react";
import { CartContext } from "../store/CartContext";

function CartPage() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  // reduce
  const total = cart.reduce((prevValue, currentItem) => {
    return prevValue + currentItem.price * currentItem.quantity;
  }, 0);

  return (
    <section className="h-100">
      <div className="container h-100 py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-10">
            <button className="btn btn-danger" onClick={clearCart}>
              Clear Cart
            </button>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="fw-normal mb-0">Shopping Cart</h3>
              <div>
                <p className="mb-0">
                  <span className="text-muted">Sort by:</span>{" "}
                  <a href="#!" className="text-body">
                    price <i className="fas fa-angle-down mt-1" />
                  </a>
                </p>
              </div>
            </div>
            {/* this is one product html */}
            {cart.map((product) => {
              // return html | jsx
              return (
                <div className="card rounded-3 mb-4" key={product._id}>
                  <div className="card-body p-4">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-2 col-lg-2 col-xl-2">
                        <img
                          src={product.image}
                          className="img-fluid rounded-3"
                          alt={product.title}
                        />
                      </div>
                      <div className="col-md-3 col-lg-3 col-xl-3">
                        <p className="lead fw-normal mb-2">{product.title}</p>
                      </div>
                      <div className="col-md-2 col-lg-2 col-xl-1 d-flex">
                        <input
                          id="form1"
                          min={0}
                          name="quantity"
                          defaultValue={product.quantity}
                          type="number"
                          className="form-control form-control-sm"
                        />
                      </div>
                      <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                        <h5 className="mb-0 text-nowrap">{product.price}EGP</h5>
                      </div>
                      <button
                        onClick={() => removeFromCart(product)}
                        className="col-md-2 col-lg-2 col-xl-2  btn btn-danger text-nowrap"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="card my-3 fs-2 fw-bold">{total.toFixed(2)} EGP</div>
            <div className="card">
              <div className="card-body">
                <button
                  type="button"
                  data-mdb-button-init=""
                  data-mdb-ripple-init=""
                  className="btn btn-warning btn-block btn-lg"
                >
                  Proceed to Pay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default CartPage;
