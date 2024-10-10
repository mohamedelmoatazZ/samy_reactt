import React from 'react';
/* eslint-disable */

const Navbar = () => {
    return (
        <React.Fragment>
              <div style={{ backgroundColor: '#2b957a', color: 'white', height: 'auto', width: 'auto', padding: '5px 0', textAlign: 'center', fontSize: '25px' }}>
      شحن مجاني للطلبات التي تزيد قيمتها عن 1299 جنيه
            </div>
            
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">ACTIV</a>
      <div className="ml-auto">
        <a href="#" className="btn btn-primary" style={{ backgroundColor: '#dc3545' }}>Download App</a>
        <a href="./Accessories(ar).html" className="btn btn-outline-dark">Arabic</a>
      </div>
            </nav>
            </React.Fragment>
  );
};

export default Navbar;
