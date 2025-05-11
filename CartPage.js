import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// ✅ Move recommendations OUTSIDE the component
const recommendedProducts = [
  { id: 1, name: "Fresh Apples", price: 2.99, image: "/images/apples.jpg", quantity: 1, unit: 'kg' },
  { id: 2, name: "Organic Milk", price: 1.89, image: "/images/milk.jpg", quantity: 1, unit: 'L' },
  { id: 3, name: "Bananas", price: 1.29, image: "/images/bananas.jpg", quantity: 6, unit: 'pcs' },
  { id: 4, name: "Brown Bread", price: 2.49, image: "/images/bread.jpg", quantity: 1, unit: 'loaf' },
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [availableRecommendations, setAvailableRecommendations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('loggedIn') !== 'true') {
      alert('Please sign in to access your cart.');
      navigate('/signin');
    } else {
      setIsLoggedIn(true);
    }

    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, [navigate]);

  useEffect(() => {
    const cartIds = new Set(cartItems.map(item => item.id));
    const filtered = recommendedProducts.filter(p => !cartIds.has(p.id));
    setAvailableRecommendations(filtered);
  }, [cartItems]);

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    navigate('/signin');
  };

  const handleRemoveItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleAddToCart = (product) => {
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleProceed = () => {
    navigate('/user-details');
  };

  return (
    isLoggedIn && (
      <div className="cart-container" style={{
        maxWidth: '800px',
        margin: '60px auto',
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)',
      }}>
        <h2 className="cart-title text-success text-center mb-4">
          🛒 Your Shopping Cart
        </h2>

        {cartItems.length === 0 ? (
          <p className="text-center">Your cart is empty!</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="row align-items-center mb-3">
              <div className="col-3">
                <img src={item.image} className="img-fluid rounded" alt={item.name} />
              </div>
              <div className="col-5">
                <h5>{item.name}</h5>
                <p className="text-muted">{item.quantity} {item.unit}</p>
              </div>
              <div className="col-2">
                <span>${item.price}</span>
              </div>
              <div className="col-2 text-end">
                <button className="btn btn-sm btn-outline-danger" onClick={() => handleRemoveItem(index)}>
                  Remove
                </button>
              </div>
            </div>
          ))
        )}

        {cartItems.length > 0 && (
          <div className="text-end mt-4">
            <button className="btn btn-success" onClick={handleProceed}>
              Proceed to Checkout
            </button>
          </div>
        )}

        {/* Recommended Products */}
        {availableRecommendations.length > 0 && (
          <>
            <h4 className="text-center mt-5 text-success">Recommended for You</h4>
            <div className="row mt-3">
              {availableRecommendations.map((product) => (
                <div className="col-md-6 mb-4" key={product.id}>
                  <div className="card h-100 shadow-sm">
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt={product.name}
                      style={{ height: '180px', objectFit: 'cover' }}
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">${product.price.toFixed(2)}</p>
                      <button
                        className="btn btn-outline-success btn-sm"
                        onClick={() => handleAddToCart(product)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        <div className="text-center mt-4">
          <button className="btn btn-danger" onClick={handleLogout}>
            Sign Out
          </button>
        </div>
      </div>
    )
  );
};

export default CartPage;
