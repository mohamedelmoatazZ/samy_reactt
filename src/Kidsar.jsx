import React from 'react';
/* eslint-disable */
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">أكتف</a>
      <div className="ml-auto">
        <a href="#" className="btn btn-primary" style={{ backgroundColor: '#dc3545' }}>تحميل التطبيق</a>
        <a href="./index.html" className="btn btn-outline-dark">العربية</a>
      </div>
    </nav>
  );
};

const ProductSection = () => {
  return (
    <div className="main-container">
      {/* Product Section */}
      <div className="products-container">
        <div className="product-card">
          <div className="card">
            <img src="./PinkTshirtKids.webp" className="card-img-top" alt="تي شيرت جرافيك كاجوال - وردي" />
            <div className="card-body text-center">
              <h5 className="product-title">تي شيرت جرافيك كاجوال - وردي</h5>
              <div className="price-container">
                <span className="price-old">EGP 50.00 <span className="discount-text">وفر</span></span>
                <span className="price-current">EGP 349.00</span>
              </div>
              <p className="product-brand">ActivNew</p>
            </div>
          </div>
        </div>

        <div className="product-card">
          <div className="card">
            <img src="./yelloTshirtkids.webp" className="card-img-top" alt="تي شيرت جرافيك كاجوال - أصفر" />
            <div className="card-body text-center">
              <h5 className="product-title">تي شيرت جرافيك كاجوال - أصفر</h5>
              <p className="product-brand">ActivNew</p>
              <div className="price-container">
                <span className="price-old">EGP 50.00 <span className="discount-text">وفر</span></span>
                <span className="price-current">EGP 349.00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="product-card">
          <div className="card">
            <img src="./orangeTshirtkids.webp" className="card-img-top" alt="تي شيرت جرافيك ر.نِك - برتقالي" />
            <div className="card-body text-center">
              <h5 className="product-title">تي شيرت جرافيك ر.نِك - برتقالي</h5>
              <p className="product-brand">ActivNew</p>
              <div className="price-container">
                <span className="price-old">EGP 50.00 <span className="discount-text">وفر</span></span>
                <span className="price-current">EGP 349.00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="product-card">
          <div className="card">
            <img src="./short.webp" className="card-img-top" alt="شورت جاباردين - كاكي" />
            <div className="card-body text-center">
              <h5 className="product-title">شورت جاباردين - كاكي</h5>
              <p className="product-brand">ActivNew</p>
              <div className="price-container">
                <span className="price-old">EGP 50.00 <span className="discount-text">وفر</span></span>
                <span className="price-current">EGP 569.00</span>
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
      <h5>المتوفر</h5>
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
        <input type="checkbox" id="slippers" /> <label htmlFor="slippers">الصنادل، والشبشب، والنعال</label><br />
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
      <Navbar />
      <ProductSection />
      <FilterSidebar />
    </div>
  );
};

export default App;
