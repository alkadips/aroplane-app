import React from 'react';

function ConfirmationModal({ isOpen, onClose, onConfirm, isChecked, onCheckboxChange }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Confirm Action</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            &times;
          </button>
        </div>
        <div className="mb-4">
          <p>Please read and accept our terms and conditions to proceed.</p>
          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={onCheckboxChange}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2">I accept the terms and conditions</span>
          </div>
        </div>
        <div className="flex justify-between mt-10">
          <button
            onClick={onClose}
            className=" hover:bg-gray-700 text-black border border-black font-bold py-2 px-4 rounded"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={!isChecked}
            className={`py-2 px-4 rounded ${
              isChecked ? 'bg-gray-200 hover:bg-blue-700 border-black border font-bold' : 'bg-blue-300 text-black border border-black cursor-not-allowed'
            }`}
          >
            Agree
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;
