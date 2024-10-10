import React from 'react';
/* eslint-disable */
const ProductSection = () => {
  return (
    <div className="main-container">
      {/* Product Section */}
      <div className="products-container">
        <div className="product-card">
          <div className="card">
            <img src="./images/Accessoriese/Socks.webp" className="card-img-top" alt="جوارب ACTIV 2/3" />
            <div className="card-body text-center">
              <h5 className="product-title">جوارب ACTIV 2/3</h5>
              <div className="price-container">
                <span className="price-current">EGP 60.00</span>
              </div>
              <p className="product-brand">ActivNew</p>
            </div>
          </div>
        </div>

        <div className="product-card">
          <div className="card">
            <img src="./images/Accessoriese/Cap.webp" className="card-img-top" alt="قبعة ACTIVNEW للرجال - أسود" />
            <div className="card-body text-center">
              <h5 className="product-title">قبعة ACTIVNEW للرجال - أسود</h5>
              <p className="product-brand">ActivNew</p>
              <div className="price-container">
                <span className="price-current">EGP 219.00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="product-card">
          <div className="card">
            <img src="./images/Accessoriese/Wallet.webp" className="card-img-top" alt="محفظة رجالية - أزرق" />
            <div className="card-body text-center">
              <h5 className="product-title">محفظة رجالية - أزرق</h5>
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
            <img src="./images/Accessoriese/Ball.webp" className="card-img-top" alt="كرة قدم ACTIVNEW - أصفر" />
            <div className="card-body text-center">
              <h5 className="product-title">كرة قدم ACTIVNEW - أصفر</h5>
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
      <h5>التوفر</h5>
      <div>
        <input type="checkbox" id="in-stock" /> <label htmlFor="in-stock">متوفر</label><br />
        <input type="checkbox" id="out-stock" /> <label htmlFor="out-stock">غير متوفر</label>
      </div>

      <h5 className="mt-4">السعر</h5>
      <input type="range" className="form-control-range" id="priceRange" />

      <h5 className="mt-4">نوع المنتج</h5>
      <div>
        <input type="checkbox" id="fashion" /> <label htmlFor="fashion">موضة</label><br />
        <input type="checkbox" id="lifestyle" /> <label htmlFor="lifestyle">أسلوب حياة</label><br />
        <input type="checkbox" id="running" /> <label htmlFor="running">جري</label><br />
        <input type="checkbox" id="slippers" /> <label htmlFor="slippers">صنادل، شباشب، نعال</label><br />
        <input type="checkbox" id="trekking" /> <label htmlFor="trekking">تسلق</label><br />
        <input type="checkbox" id="walking" /> <label htmlFor="walking">مشايات</label>
      </div>

      <h5 className="mt-4">المقاس</h5>
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
