import React from 'react';
import './AadharCard.css';

const AadharCard = ({ name, aadharNumber, dob, address, photo }) => {
  return (
    <div className="aadhar-card">
      <div className="aadhar-card-header">
        <h2>Identity Credential</h2>
        {/* <h3>Aadhaar</h3> */}
      </div>
      <div className="aadhar-card-body">
        <img src={photo} alt="profile" className="aadhar-card-photo" />
        <div className="aadhar-card-info">
          <h3>{name}</h3>
          <p><strong>Aadhaar No:</strong> {aadharNumber}</p>
          <p><strong>DOB:</strong> {dob}</p>
          <p><strong>Address:</strong> {address}</p>
        </div>
      </div>
    </div>
  );
};

export default AadharCard;
