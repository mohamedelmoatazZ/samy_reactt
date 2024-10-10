import React from 'react';
/* eslint-disable */
const ProductSection = () => {
  return (
    <div className="main-container">
      {/* Product Section */}
      <div className="products-container">
        <div className="product-card">
          <div className="card">
            <img src="./CamelTshirt.webp" className="card-img-top" alt="Purple Flip Flop" />
            <div className="card-body text-center">
              <h5 className="product-title">ACTIV GRAPHIC R.NECK T-SHIRT - CAMEL</h5>
              <div className="price-container">
                <span className="price-old">EGP 20.00 <span className="discount-text">وفر</span></span>
                <span className="price-current">EGP 79.00</span>
              </div>
              <p className="product-brand">ActivNew</p>
            </div>
          </div>
        </div>

        <div className="product-card">
          <div className="card">
            <img src="./GreenTshirt.webp" className="card-img-top" alt="Blue Flip Flop" />
            <div className="card-body text-center">
              <h5 className="product-title">ACTIV GRAPHIC R.NECK T-SHIRT - GREEN</h5>
              <p className="product-brand">ActivNew</p>
              <div className="price-container">
                <span className="price-old">EGP 20.00 <span className="discount-text">وفر</span></span>
                <span className="price-current">EGP 79.00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="product-card">
          <div className="card">
            <img src="./BlueTshirt.webp" className="card-img-top" alt="Black Shoes" />
            <div className="card-body text-center">
              <h5 className="product-title">ACTIV GRAPHIC R.NECK T-SHIRT - BLUE</h5>
              <p className="product-brand">ActivNew</p>
              <div className="price-container">
                <span className="price-old">EGP 20.00 <span className="discount-text">وفر</span></span>
                <span className="price-current">EGP 79.00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="product-card">
          <div className="card">
            <img src="./Shirt1.webp" className="card-img-top" alt="Black Shoes" />
            <div className="card-body text-center">
              <h5 className="product-title">ACTIV KAROH L.S SHIRT - RED</h5>
              <p className="product-brand">ActivNew</p>
              <div className="price-container">
                <span className="price-old">EGP 50.00 <span className="discount-text">وفر</span></span>
                <span className="price-current">EGP 499.00</span>
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
        <input type="checkbox" id="fashion" /> <label htmlFor="fashion">Fashion</label><br />
        <input type="checkbox" id="lifestyle" /> <label htmlFor="lifestyle">Lifestyle</label><br />
        <input type="checkbox" id="running" /> <label htmlFor="running">Running</label><br />
        <input type="checkbox" id="slippers" /> <label htmlFor="slippers">Slippers, Flip Flops & Clogs</label><br />
        <input type="checkbox" id="trekking" /> <label htmlFor="trekking">Trekking</label><br />
        <input type="checkbox" id="walking" /> <label htmlFor="walking">Walking</label>
      </div>

      <h5 className="mt-4">Size</h5>
      <div>
        <input type="checkbox" id="size-36" /> <label htmlFor="size-36">36</label><br />
        <input type="checkbox" id="size-37" /> <label htmlFor="size-37">37</label><br />
        <input type="checkbox" id="size-38" /> <label htmlFor="size-38">38</label><br />
        <input type="checkbox" id="size-39" /> <label htmlFor="size-39">39</label><br />
        <input type="checkbox" id="size-40" /> <label htmlFor="size-40">40</label><br />
        <input type="checkbox" id="size-41" /> <label htmlFor="size-41">41</label>
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
