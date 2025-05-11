import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProductsPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const fetchedProducts = [
      // Fruits
      { id: 1, name: 'Fresh Apples', price: 3.99, description: 'Crisp, juicy apples perfect for snacking or baking.', image: 'apple.jpg', category: 'Fruits' },
      { id: 2, name: 'Bananas', price: 2.49, description: 'Fresh, ripe bananas, packed with nutrients.', image: 'banana.webp', category: 'Fruits' },
      { id: 3, name: 'Oranges', price: 2.99, description: 'Fresh, sweet oranges full of vitamin C.', image: 'orange.webp', category: 'Fruits' },
      { id: 4, name: 'Strawberries', price: 4.99, description: 'Sweet and juicy strawberries, great for desserts or smoothies.', image: 'strawberries.jpg', category: 'Fruits' },
      { id: 5, name: 'Mangoes', price: 5.99, description: 'Fresh and juicy mangoes, perfect for smoothies and desserts.', image: 'mangoes.jpg', category: 'Fruits' },
      { id: 6, name: 'Pineapples', price: 3.99, description: 'Sweet, tangy pineapples, great for snacking or cooking.', image: 'pineapple.jpg', category: 'Fruits' },
      { id: 7, name: 'Grapes', price: 2.49, description: 'Sweet, seedless grapes, perfect for snacking.', image: 'grapes.jpg', category: 'Fruits' },
      { id: 8, name: 'Blueberries', price: 3.99, description: 'Fresh blueberries, great for smoothies or baking.', image: 'blueberries.jpg', category: 'Fruits' },
      { id: 9, name: 'Watermelon', price: 6.99, description: 'Sweet and refreshing watermelon, perfect for hot summer days.', image: 'watermelon.jpg', category: 'Fruits' },
      { id: 10, name: 'Apples (Organic)', price: 4.49, description: 'Organic apples, crisp and juicy.', image: 'organic-apples.jpg', category: 'Fruits' },

      // Vegetables
      { id: 11, name: 'Carrots', price: 1.99, description: 'Crunchy, sweet carrots perfect for snacking or cooking.', image: 'carrots.webp', category: 'Vegetables' },
      { id: 12, name: 'Lettuce', price: 1.49, description: 'Fresh and crispy lettuce, great for salads.', image: 'lettuce.jpg', category: 'Vegetables' },
      { id: 13, name: 'Tomatoes', price: 2.59, description: 'Juicy tomatoes perfect for salads or cooking.', image: 'tomatoes.jpeg', category: 'Vegetables' },
      { id: 14, name: 'Potatoes', price: 1.79, description: 'Fresh and starchy potatoes for cooking or baking.', image: 'potatoes.jpg', category: 'Vegetables' },
      { id: 15, name: 'Spinach', price: 3.49, description: 'Fresh spinach, packed with iron and vitamins.', image: 'spinach.jpg', category: 'Vegetables' },
      { id: 16, name: 'Cucumbers', price: 1.89, description: 'Crisp, refreshing cucumbers for salads or snacks.', image: 'cucumber.jpg', category: 'Vegetables' },
      { id: 17, name: 'Broccoli', price: 2.99, description: 'Fresh broccoli, packed with nutrients.', image: 'broccoli.jpg', category: 'Vegetables' },
      { id: 18, name: 'Cauliflower', price: 3.49, description: 'Fresh cauliflower, perfect for cooking or roasting.', image: 'cauliflower.jpg', category: 'Vegetables' },
      { id: 19, name: 'Bell Peppers', price: 2.29, description: 'Sweet and crunchy bell peppers, great for salads or cooking.', image: 'bell-pepper.jpg', category: 'Vegetables' },
      { id: 20, name: 'Zucchini', price: 2.49, description: 'Tender zucchini, perfect for grilling or stir-frying.', image: 'zucchini.jpg', category: 'Vegetables' },

      // Baby Care
      { id: 21, name: 'Baby Shampoo', price: 4.99, description: 'Gentle shampoo for babies.', image: 'baby-shampoo.jpg', category: 'Baby Care' },
      { id: 22, name: 'Baby Lotion', price: 5.49, description: 'Gentle and moisturizing lotion for babies.', image: 'baby-lotion.jpg', category: 'Baby Care' },
      { id: 23, name: 'Diapers (Pack of 50)', price: 19.99, description: 'Soft and absorbent diapers, pack of 50.', image: 'diapers.jpg', category: 'Baby Care' },
      { id: 24, name: 'Baby Wipes (Pack of 100)', price: 6.99, description: 'Gentle baby wipes for sensitive skin.', image: 'baby-wipes.jpg', category: 'Baby Care' },
      { id: 25, name: 'Baby Powder', price: 3.49, description: 'Talc-free baby powder for gentle care.', image: 'baby-powder.jpg', category: 'Baby Care' },
      { id: 26, name: 'Baby Bottle', price: 5.99, description: 'BPA-free baby bottle with anti-colic design.', image: 'baby-bottle.jpg', category: 'Baby Care' },
      { id: 27, name: 'Baby Clothes (Set of 3)', price: 12.99, description: 'Comfortable and soft baby clothes, set of 3.', image: 'baby-clothes.jpg', category: 'Baby Care' },
      { id: 28, name: 'Baby Food (Pack of 3)', price: 9.99, description: 'Organic baby food, pack of 3 jars.', image: 'baby-food.jpg', category: 'Baby Care' },
      { id: 29, name: 'Baby Blanket', price: 8.99, description: 'Soft and cozy baby blanket.', image: 'baby-blanket.jpg', category: 'Baby Care' },
      { id: 30, name: 'Baby Toothbrush', price: 3.49, description: 'Soft baby toothbrush for gentle cleaning.', image: 'baby-toothbrush.jpg', category: 'Baby Care' },

      // Household
      { id: 31, name: 'Dish Soap', price: 2.99, description: 'Gentle dish soap for your kitchen.', image: 'dish-soap.jpg', category: 'Household' },
      { id: 32, name: 'Laundry Detergent', price: 5.49, description: 'Powerful laundry detergent for clean clothes.', image: 'laundry-detergent.jpg', category: 'Household' },
      { id: 33, name: 'Trash Bags (Pack of 100)', price: 10.99, description: 'Durable trash bags, pack of 100.', image: 'trash-bags.jpg', category: 'Household' },
      { id: 34, name: 'Paper Towels', price: 3.99, description: 'Soft and absorbent paper towels, pack of 6 rolls.', image: 'paper-towels.jpg', category: 'Household' },
      { id: 35, name: 'Toilet Paper (Pack of 12)', price: 6.99, description: 'Soft and strong toilet paper, pack of 12.', image: 'toilet-paper.jpg', category: 'Household' },
      { id: 36, name: 'Hand Sanitizer', price: 3.49, description: 'Antibacterial hand sanitizer.', image: 'hand-sanitizer.jpg', category: 'Household' },
      { id: 37, name: 'Cleaning Wipes', price: 4.99, description: 'All-purpose cleaning wipes.', image: 'cleaning-wipes.jpg', category: 'Household' },
      { id: 38, name: 'Sponges (Pack of 6)', price: 2.49, description: 'Durable sponges for cleaning.', image: 'sponges.jpg', category: 'Household' },
      { id: 39, name: 'All-Purpose Cleaner', price: 4.99, description: 'Multi-surface all-purpose cleaner.', image: 'all-purpose-cleaner.jpg', category: 'Household' },
      { id: 40, name: 'Air Freshener', price: 3.99, description: 'Long-lasting air freshener for your home.', image: 'air-freshener.jpg', category: 'Household' },

      // Electronics
      { id: 41, name: 'Wireless Earbuds', price: 29.99, description: 'High-quality wireless earbuds.', image: 'wireless-earbuds.jpg', category: 'Electronics' },
      { id: 42, name: 'Smartphone', price: 499.99, description: 'Latest smartphone with advanced features.', image: 'smartphone.jpg', category: 'Electronics' },
      { id: 43,name: 'Laptop', price: 799.99, description: 'High-performance laptop for work and entertainment.', image: 'laptop.jpg', category: 'Electronics' },
{ id: 44, name: 'Smart Watch', price: 199.99, description: 'Stylish smart watch with health tracking features.', image: 'smart-watch.jpg', category: 'Electronics' },
{ id: 45, name: 'Bluetooth Speaker', price: 59.99, description: 'Portable Bluetooth speaker with great sound quality.', image: 'bluetooth-speaker.jpg', category: 'Electronics' },
{ id: 46, name: 'HD Webcam', price: 39.99, description: 'High-definition webcam for video calls.', image: 'webcam.jpg', category: 'Electronics' },
{ id: 47, name: 'Noise-Canceling Headphones', price: 129.99, description: 'Noise-canceling headphones for immersive sound.', image: 'noise-canceling-headphones.jpg', category: 'Electronics' },
{ id: 48, name: 'Portable Charger', price: 25.99, description: 'Compact portable charger for your devices.', image: 'portable-charger.jpg', category: 'Electronics' },
{ id: 49, name: 'Digital Camera', price: 399.99, description: 'High-quality digital camera for photography enthusiasts.', image: 'digital-camera.jpg', category: 'Electronics' },
{ id: 50, name: 'Gaming Console', price: 499.99, description: 'Next-gen gaming console with exclusive titles.', image: 'gaming-console.jpg', category: 'Electronics' },

    // Hair Care
      { id: 51, name: 'Shampoo', price: 4.99, description: 'Cleanses hair and scalp.', image: 'shampoo.jpg', category: 'Hair Care' },
      { id: 52, name: 'Conditioner', price: 7.99, description: 'Moisturizes and softens hair.', image: 'conditioner.jpg', category: 'Hair Care' },
      { id: 53, name: 'Hair Oil', price: 5.49, description: 'Strengthens and adds shine to your hair.', image: 'hair-oil.jpg', category: 'Hair Care' },
      { id: 54, name: 'Hair Serum', price: 8.99, description: 'Adds shine and smoothness to your hair.', image: 'hair-serum.jpg', category: 'Hair Care' },
      { id: 55, name: 'Hair Mask', price: 9.99, description: 'Deep conditioning hair mask.', image: 'hair-mask.jpg', category: 'Hair Care' },
      { id: 56, name: 'Hair Gel', price: 4.49, description: 'Strong hold hair gel for styling.', image: 'hair-gel.jpg', category: 'Hair Care' },
      { id: 57, name: 'Dry Shampoo', price: 5.99, description: 'Instantly refreshes your hair without washing.', image: 'dry-shampoo.jpg', category: 'Hair Care' },
      { id: 58, name: 'Hair Spray', price: 6.49, description: 'Holds hair in place all day.', image: 'hair-spray.jpg', category: 'Hair Care' },
      { id: 59, name: 'Hair Comb', price: 2.99, description: 'Durable hair comb for styling.', image: 'hair-comb.jpg', category: 'Hair Care' },
      { id: 60, name: 'Hair Brush', price: 3.99, description: 'Gentle brush for detangling your hair.', image: 'hair-brush.jpg', category: 'Hair Care' },

       // Bakery
      { id: 61, name: 'Chocolate Cake', price: 8.99, description: 'Delicious chocolate cake for dessert.', image: 'chocolate-cake.jpg', category: 'Bakery' },
      { id: 62, name: 'Croissants (Pack of 6)', price: 4.99, description: 'Freshly baked croissants, pack of 6.', image: 'croissants.jpg', category: 'Bakery' },
      { id: 63, name: 'Donuts (Pack of 6)', price: 3.99, description: 'Fresh and soft donuts, pack of 6.', image: 'donuts.jpg', category: 'Bakery' },
      { id: 64, name: 'Blueberry Muffins', price: 5.49, description: 'Soft and moist blueberry muffins.', image: 'blueberry-muffins.jpg', category: 'Bakery' },
      { id: 65, name: 'Banana Bread', price: 6.99, description: 'Freshly baked banana bread.', image: 'banana-bread.jpg', category: 'Bakery' },
      { id: 66, name: 'Apple Pie', price: 7.99, description: 'Homemade apple pie with a buttery crust.', image: 'apple-pie.jpg', category: 'Bakery' },
      { id: 67, name: 'Cheese Bread', price: 4.49, description: 'Freshly baked cheesy bread.', image: 'cheese-bread.jpg', category: 'Bakery' },
      { id: 68, name: 'Cinnamon Rolls', price: 5.99, description: 'Warm and soft cinnamon rolls.', image: 'cinnamon-rolls.jpg', category: 'Bakery' },
      { id: 69, name: 'Baguette', price: 2.99, description: 'Freshly baked crispy baguette.', image: 'baguette.jpg', category: 'Bakery' },
      { id: 70, name: 'Scones', price: 4.99, description: 'Freshly baked scones with raisins.', image: 'scones.jpg', category: 'Bakery' },

];
setProducts(fetchedProducts);
}, []);

const addToCart = (product) => {
setCart((prevCart) => {
const productExists = prevCart.find(item => item.id === product.id);
return productExists
? prevCart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
: [...prevCart, { ...product, quantity: 1 }];
});
};

const getCartCount = () => {
return cart.reduce((total, item) => total + item.quantity, 0);
};

const scrollToTop = () => {
window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Filter products based on the selected category
const filteredProducts = selectedCategory === 'All'
? products
: products.filter(product => product.category === selectedCategory);

return (
<>
{/* Navbar */}
<nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
<div className="container">
<Link className="navbar-brand fw-bold text-success" to="/">
Fresh Express
</Link>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarContent">
<ul className="navbar-nav me-auto mb-2 mb-lg-0">
<li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
<li className="nav-item"><Link className="nav-link active" to="/products">Products</Link></li>
<li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
 <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link> {/* Added About Us link */}
              </li>
</ul>
<form className="d-flex me-3">
<input className="form-control me-2" type="search" placeholder="Search products" />
<button className="btn btn-outline-success" type="submit">Search</button>
</form>
<Link to="/cart" className="btn btn-outline-dark me-2">
🛒 Cart ({getCartCount()})
</Link>
<Link to="/signin" className="btn btn-dark">Sign In / Log In</Link>
</div>
</div>
</nav>


  {/* Category Bar */}
  <div className="container-fluid py-2 category-bar border-bottom bg-light">
    <div className="d-flex flex-wrap justify-content-center">
      {['All', 'Fruits', 'Vegetables', 'Baby Care', 'Household', 'Electronics', 'Hair Care', 'Bakery', 'Dairy', 'Beverages'].map((item) => (
        <button
          key={item}
          onClick={() => setSelectedCategory(item)}
          className={`me-3 btn btn-outline-success ${selectedCategory === item ? 'active' : ''}`}
        >
          {item}
        </button>
      ))}
    </div>
  </div>

  {/* Product Listings */}
  <div className="container py-5 product-section" id="products">
    <h2 className="text-center mb-5 text-success fw-bold">🎉 Our Products</h2>
    <div className="row">
      {filteredProducts.map((product) => (
        <div className="col-md-4 mb-4 product-card" key={product.id}>
          <div className="card shadow h-100">
            <Link to={`/product/${product.id}`}>
              <img src={product.image} className="card-img-top" alt={product.name} />
            </Link>
            <div className="card-body text-center">
              <h5 className="card-title">
                <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
                  {product.name}
                </Link>
              </h5>
              <p className="card-text">{product.description}</p>
              <h6 className="text-success">${product.price.toFixed(2)}</h6>
              <button 
                className="btn btn-success" 
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Back to Top Button */}
  <button className="btn btn-secondary btn-sm position-fixed bottom-0 end-0 mb-4 me-4" style={{ zIndex: 10 }} onClick={scrollToTop}>
    Back to Top
  </button>

   {filteredProducts.length === 0 ? (
        <p className="text-center">No products available in this category.</p>
      ) : (
        <div className="row">
          {filteredProducts.map((product) => (
            <div className="col-md-4 mb-4 product-card" key={product.id}>
              <div className="card shadow h-100">
                <Link to={`/product/${product.id}`}>
                  <img src={product.image} className="card-img-top" alt={product.name} />
                </Link>
                <div className="card-body text-center">
                  <h5 className="card-title">
                    <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
                      {product.name}
                    </Link>
                  </h5>
                  <p className="card-text">{product.description}</p>
                  <h6 className="text-success">${product.price.toFixed(2)}</h6>
                  <button 
                    className="btn btn-success" 
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                  </div>
                  </div>
                  </div>
          ))}
          </div>
      )}

  {/* Footer */}
  <footer className="footer bg-success text-white text-center py-4">
    <p className="mb-1">&copy; 2025 Fresh Express. All rights reserved.</p>
    <p className="mb-0">📞 Contact Us: +1 800-123-4567</p>
  </footer>
</>
);
};

export default ProductsPage;
