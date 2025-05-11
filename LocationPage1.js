import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LocationPage1.css';

const statesWithDistricts = {
  Telangana: ['Hyderabad', 'Warangal', 'Nizamabad'],
  AndhraPradesh: ['Vijayawada', 'Visakhapatnam', 'Guntur'],
  Karnataka: ['Bangalore', 'Mysore', 'Mangalore'],
};

const LocationPage1 = () => {
  const [location, setLocation] = useState({ state: '', district: '', coords: null });
  const navigate = useNavigate();

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation((prev) => ({
            ...prev,
            coords: {
              latitude: position.coords.latitude.toFixed(4),
              longitude: position.coords.longitude.toFixed(4),
            },
          }));
        },
        (error) => {
          alert("Unable to retrieve your location. Please allow location access.");
        }
      );
    }
  };

  const handleNext = () => {
    if (location.state && location.district) {
      navigate('/payment');
    } else {
      alert('Please select both state and district before proceeding.');
    }
  };

  return (
    <div className="location-container">
      <div className="location-card">
        <h2>Select Delivery Location</h2>

        <button className="btn btn-primary my-3" onClick={handleLocationClick}>
          Use Current Location
        </button>

        {location.coords && (
          <div className="alert alert-success mt-2">
            Detected Location: <br />
            Latitude: {location.coords.latitude}, Longitude: {location.coords.longitude}
          </div>
        )}

        <div className="form-group">
          <label>State</label>
          <select
            className="form-control"
            value={location.state}
            onChange={(e) =>
              setLocation({ ...location, state: e.target.value, district: '' })
            }
          >
            <option value="">-- Select State --</option>
            {Object.keys(statesWithDistricts).map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        {location.state && (
          <div className="form-group mt-3">
            <label>District</label>
            <select
              className="form-control"
              value={location.district}
              onChange={(e) =>
                setLocation({ ...location, district: e.target.value })
              }
            >
              <option value="">-- Select District --</option>
              {statesWithDistricts[location.state].map((dist) => (
                <option key={dist} value={dist}>
                  {dist}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="text-center mt-4">
          <button className="btn btn-success w-100 py-2" onClick={handleNext}>
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationPage1;
