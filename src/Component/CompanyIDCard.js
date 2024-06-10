import React from 'react';

const CompanyIDCard = ({ name, status, photo, company, type }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-blue-200 p-4">
        <h2 className="text-black text-left text-lg font-semibold">{company}</h2>
      </div>
      <div className="p-6 flex items-center flex-row gap-5">
      <div class="relative inline-block">
        <img src="https://readymadeui.com/team-2.webp" class="w-14 h-14 rounded" />
        <span class="h-3 w-3 rounded-full border border-white bg-yellow-500 block absolute -bottom-0.5 -right-0.5"></span>
      </div>
        {/* <img
          className="w-24 h-24 object-cover mb-4"
          src={photo}
          alt="Profile"
        /> */}
        <div className="text-left">
          <h3 className="text-sm text-gray-700">Name:<span className='font-semibold text-lg'> {name}</span></h3>
          <p className="text-sm text-gray-700">Status: <span className='font-semibold text-green-500 text-lg'>{status}</span></p>
          <p className="text-sm text-gray-700">Type: <span className='font-semibold text-lg'>{type}</span></p>
        </div>
      </div>
    </div>
  );
};

export default CompanyIDCard;
