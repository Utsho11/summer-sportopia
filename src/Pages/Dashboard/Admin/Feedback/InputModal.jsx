import { useState } from 'react';
import axios from 'axios';

const InputModal = ({ id, isOpen, onClose }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:5000/classes/feedback/${id}`, { inputValue });

      console.log('Submitted:', inputValue);
      setInputValue('');
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 ${isOpen ? '' : 'hidden'}`}>
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Input Modal ({id})</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded-md mb-4"
            placeholder="Enter something..."
            value={inputValue}
            onChange={handleInputChange}
          />
          <div className="flex justify-end">
            <button
              type="button"
              className="px-4 py-2 text-sm rounded-md text-white bg-gray-500 hover:bg-gray-600"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="ml-2 px-4 py-2 text-sm rounded-md text-white bg-blue-500 hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputModal;
