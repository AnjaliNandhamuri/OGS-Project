import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../CartPage/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const fakeProducts = [
  {
    id: '1',
    name: 'Fresh Apples',
    price: 3.99,
    description: 'Crisp and juicy apples.',
    image: 'https://via.placeholder.com/200',
    rating: 4.5,
    available: true,
    category: 'fruits'
  },
  {
    id: '2',
    name: 'Organic Milk',
    price: 2.49,
    description: 'Pure organic cow milk.',
    image: 'https://via.placeholder.com/200',
    rating: 4.7,
    available: false,
    category: 'dairy'
  },
  {
    id: '3',
    name: 'Green Grapes',
    price: 2.99,
    description: 'Sweet and seedless.',
    image: 'https://via.placeholder.com/200',
    rating: 4.3,
    available: true,
    category: 'fruits'
  },
];

const ProductDetailPage = () => {
  const { productId } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    const found = fakeProducts.find(p => p.id === productId);
    setProduct(found);

    if (found) {
      const similar = fakeProducts.filter(
        p => p.category === found.category && p.id !== found.id
      );
      setSimilarProducts(similar);
    }
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      alert(`${product.name} added to cart!`);
    }
  };

  if (!product) return <div className="text-center mt-5">Loading product details...</div>;

  return (
    <div className="container mt-5">
      <div className="row g-4">
        <div className="col-md-6">
          <img src={product.image} alt={product.name} className="img-fluid rounded" />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p className="text-muted">{product.description}</p>
          <h4 className="text-success">${product.price.toFixed(2)}</h4>
          <p><strong>Rating:</strong> {product.rating} ⭐</p>
          <p>
            <strong>Availability:</strong>{' '}
            {product.available ? (
              <span className="text-success">In Stock</span>
            ) : (
              <span className="text-danger">Out of Stock</span>
            )}
          </p>

          <button
            className="btn btn-success mt-3"
            onClick={handleAddToCart}
            disabled={!product.available}
          >
            {product.available ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>

      {similarProducts.length > 0 && (
        <div className="mt-5">
          <h4>Similar Products</h4>
          <div className="row">
            {similarProducts.map(sp => (
              <div className="col-md-4 mb-4" key={sp.id}>
                <div className="card h-100 shadow-sm">
                  <Link to={`/product/${sp.id}`}>
                    <img src={sp.image} className="card-img-top" alt={sp.name} />
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title">
                      <Link to={`/product/${sp.id}`} className="text-decoration-none text-dark">
                        {sp.name}
                      </Link>
                    </h5>
                    <p className="card-text text-success">${sp.price.toFixed(2)}</p>
                    <p className="text-muted">⭐ {sp.rating}</p>
                    <button
                      className="btn btn-outline-success"
                      onClick={() => addToCart(sp)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
