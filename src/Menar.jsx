/* eslint-disable */
import React from 'react';

const ProductSection = () => {
  return (
    <div className="main-container">
      {/* Product Section */}
      <div className="products-container">
        <div className="product-card">
          <div className="card">
            <img src="./BlueTshirt.webp" className="card-img-top" alt="شبشب بنفسجي" />
            <div className="card-body text-center">
              <h5 className="product-title">تي شيرت ACTIV جرافيك برقبة دائرية - أزرق</h5>
              <div className="price-container">
                <span className="price-old">20.00 جنيه <span className="discount-text">وفر</span></span>
                <span className="price-current">79.00 جنيه</span>
              </div>
              <p className="product-brand">اكتف نيو</p>
            </div>
          </div>
        </div>

        <div className="product-card">
          <div className="card">
            <img src="./CamelTshirt.webp" className="card-img-top" alt="شبشب أزرق" />
            <div className="card-body text-center">
              <h5 className="product-title">تي شيرت ACTIV جرافيك برقبة دائرية - جملي</h5>
              <p className="product-brand">اكتف نيو</p>
              <div className="price-container">
                <span className="price-old">20.00 جنيه <span className="discount-text">وفر</span></span>
                <span className="price-current">79.00 جنيه</span>
              </div>
            </div>
          </div>
        </div>

        <div className="product-card">
          <div className="card">
            <img src="./GreenTshirt.webp" className="card-img-top" alt="أحذية سوداء" />
            <div className="card-body text-center">
              <h5 className="product-title">تي شيرت ACTIV جرافيك برقبة دائرية - اخضر</h5>
              <p className="product-brand">اكتف نيو</p>
              <div className="price-container">
                <span className="price-old">20.00 جنيه <span className="discount-text">وفر</span></span>
                <span className="price-current">79.00 جنيه</span>
              </div>
            </div>
          </div>
        </div>

        <div className="product-card">
          <div className="card">
            <img src="./Shirt1.webp" className="card-img-top" alt="أحذية سوداء" />
            <div className="card-body text-center">
              <h5 className="product-title">قميص أكتيف كاروه إل إس - أحمر</h5>
              <p className="product-brand">اكتف نيو</p>
              <div className="price-container">
                <span className="price-old">20.00 جنيه <span className="discount-text">وفر</span></span>
                <span className="price-current">79.00 جنيه</span>
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
      <h5>متوفر</h5>
      <div>
        <input type="checkbox" id="in-stock" /> <label htmlFor="in-stock">متوفر</label><br />
        <input type="checkbox" id="out-stock" /> <label htmlFor="out-stock">غير متوفر</label>
      </div>

      <h5 className="mt-4">السعر</h5>
      <input type="range" className="form-control-range" id="priceRange" />

      <h5 className="mt-4">نوع المنتج</h5>
      <div>
        <input type="checkbox" id="fashion" /> <label htmlFor="fashion">الموضة</label><br />
        <input type="checkbox" id="lifestyle" /> <label htmlFor="lifestyle">الحياة اليومية</label><br />
        <input type="checkbox" id="running" /> <label htmlFor="running">الجري</label><br />
        <input type="checkbox" id="slippers" /> <label htmlFor="slippers">شباشب وكروكس</label><br />
        <input type="checkbox" id="trekking" /> <label htmlFor="trekking">الرحلات</label><br />
        <input type="checkbox" id="walking" /> <label htmlFor="walking">المشي</label>
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
