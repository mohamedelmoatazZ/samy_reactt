import React from 'react';
/* eslint-disable */
const ProductSection = () => {
  return (
    <div className="main-container">
      {/* Product Section */}
      <div className="products-container">
        <div className="product-card">
          <div className="card">
            <img src="./Socks.webp" className="card-img-top" alt="Purple Flip Flop" />
            <div className="card-body text-center">
              <h5 className="product-title">ACTIV 2/3 SOCKS</h5>
              <div className="price-container">
                <span className="price-current">EGP 60.00</span>
              </div>
              <p className="product-brand">ActivNew</p>
            </div>
          </div>
        </div>

        <div className="product-card">
          <div className="card">
            <img src="./Cap.webp" className="card-img-top" alt="Blue Flip Flop" />
            <div className="card-body text-center">
              <h5 className="product-title">ACTIVNEW MEN SNAP CAP - BLACK</h5>
              <p className="product-brand">ActivNew</p>
              <div className="price-container">
                <span className="price-current">EGP 219.00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="product-card">
          <div className="card">
            <img src="./Wallet.webp" className="card-img-top" alt="Black Shoes" />
            <div className="card-body text-center">
              <h5 className="product-title">Men Wallet - Blue</h5>
              <p className="product-brand">ActivNew</p>
              <div className="price-container">
                <span className="price-old">EGP 100.00 <span className="discount-text">وفر</span></span>
                <span className="price-current">EGP 149.00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="product-card">
          <div className="card">
            <img src="./Ball.webp" className="card-img-top" alt="Black Shoes" />
            <div className="card-body text-center">
              <h5 className="product-title">ACTIVNEW SOCCER FOOTBALL - YELLOW</h5>
              <p className="product-brand">ActivNew</p>
              <div className="price-container">
                <span className="price-current">EGP 719.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FilterSidebar = () => {
  return (
    <div className="filter-sidebar">
      <h5>Available</h5>
      <div>
        <input type="checkbox" id="in-stock" /> <label htmlFor="in-stock">In stock</label><br />
        <input type="checkbox" id="out-stock" /> <label htmlFor="out-stock">Out of stock</label>
      </div>

      <h5 className="mt-4">Price</h5>
      <input type="range" className="form-control-range" id="priceRange" />

      <h5 className="mt-4">Product Type</h5>
      <div>
        <input type="checkbox" /> Fashion<br />
        <input type="checkbox" /> Lifestyle<br />
        <input type="checkbox" /> Running<br />
        <input type="checkbox" /> Slippers, Flip Flops & Clogs<br />
        <input type="checkbox" /> Trekking<br />
        <input type="checkbox" /> Walking<br />
      </div>

      <h5 className="mt-4">Size</h5>
      <div>
        <input type="checkbox" /> 36<br />
        <input type="checkbox" /> 37<br />
        <input type="checkbox" /> 38<br />
        <input type="checkbox" /> 39<br />
        <input type="checkbox" /> 40<br />
        <input type="checkbox" /> 41<br />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <ProductSection />
      <FilterSidebar />
    </div>
  );
};

export default App;
