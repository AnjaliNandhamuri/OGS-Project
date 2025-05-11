import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserDetailsPage = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    houseNumber: '',
    state: '',
    district: '',
    address: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!userData.name) errors.name = "Full Name is required.";
    if (!userData.email || !/\S+@\S+\.\S+/.test(userData.email)) errors.email = "Valid email required.";
    if (!userData.phone || !/^\d{10}$/.test(userData.phone)) errors.phone = "Valid 10-digit phone required.";
    if (!userData.houseNumber) errors.houseNumber = "House number required.";
    if (!userData.state) errors.state = "State is required.";
    if (!userData.district) errors.district = "District is required.";
    if (!userData.address) errors.address = "Address is required.";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      navigate('/location');
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4 mb-5 rounded">
        <h2 className="text-center text-success">Enter Your Details</h2>
        <form onSubmit={handleSubmit} className="mt-4">

          {/* Full Name */}
          <div className="mb-3" style={{ backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '10px' }}>
            <label htmlFor="name" className="form-label">Full Name</label>
            <input type="text" className={`form-control ${formErrors.name ? 'is-invalid' : ''}`} name="name" value={userData.name} onChange={handleChange} placeholder="Your Name" />
            {formErrors.name && <div className="invalid-feedback">{formErrors.name}</div>}
          </div>

          {/* Email */}
          <div className="mb-3" style={{ backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '10px' }}>
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className={`form-control ${formErrors.email ? 'is-invalid' : ''}`} name="email" value={userData.email} onChange={handleChange} placeholder="Your Email" />
            {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
          </div>

          {/* Phone */}
          <div className="mb-3" style={{ backgroundColor: '#e6f9e6', padding: '15px', borderRadius: '10px' }}>
            <label htmlFor="phone" className="form-label">Phone</label>
            <input type="tel" className={`form-control ${formErrors.phone ? 'is-invalid' : ''}`} name="phone" value={userData.phone} onChange={handleChange} placeholder="10-digit number" />
            {formErrors.phone && <div className="invalid-feedback">{formErrors.phone}</div>}
          </div>

          {/* House Number */}
          <div className="mb-3" style={{ backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '10px' }}>
            <label htmlFor="houseNumber" className="form-label">House Number</label>
            <input type="text" className={`form-control ${formErrors.houseNumber ? 'is-invalid' : ''}`} name="houseNumber" value={userData.houseNumber} onChange={handleChange} placeholder="House No." />
            {formErrors.houseNumber && <div className="invalid-feedback">{formErrors.houseNumber}</div>}
          </div>

          {/* State */}
          <div className="mb-3" style={{ backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '10px' }}>
            <label htmlFor="state" className="form-label">State</label>
            <input type="text" className={`form-control ${formErrors.state ? 'is-invalid' : ''}`} name="state" value={userData.state} onChange={handleChange} placeholder="State" />
            {formErrors.state && <div className="invalid-feedback">{formErrors.state}</div>}
          </div>

          {/* District */}
          <div className="mb-3" style={{ backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '10px' }}>
            <label htmlFor="district" className="form-label">District</label>
            <input type="text" className={`form-control ${formErrors.district ? 'is-invalid' : ''}`} name="district" value={userData.district} onChange={handleChange} placeholder="District" />
            {formErrors.district && <div className="invalid-feedback">{formErrors.district}</div>}
          </div>

          {/* Address */}
          <div className="mb-3" style={{ backgroundColor: '#e6f9e6', padding: '15px', borderRadius: '10px' }}>
            <label htmlFor="address" className="form-label">Address</label>
            <textarea className={`form-control ${formErrors.address ? 'is-invalid' : ''}`} name="address" value={userData.address} onChange={handleChange} rows="3" placeholder="Full Address"></textarea>
            {formErrors.address && <div className="invalid-feedback">{formErrors.address}</div>}
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-success w-100">Proceed to Location Page</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserDetailsPage;
