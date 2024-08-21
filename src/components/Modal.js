import React from 'react';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl relative flex"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="flex-shrink-0 w-1/2">
          <img
            src="./upiid.jpg" // Update this path to your image
            alt="Donation"
            className="w-full h-full object-cover rounded-l-lg"
          />
        </div>
        <div className="w-1/2 p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4">Support Us</h2>
          <p className="mb-4">
            Your donation will help us continue our mission by providing the necessary resources and support for our projects. Here’s how your contribution will make a difference:
          </p>
          Our website is dedicated to making a meaningful impact on the lives of underprivileged children through education. Every premium purchase made on our platform is fully allocated to support educational initiatives, including providing essential resources, building classrooms, and funding teacher training. By channeling all donated funds directly into these vital programs, we ensure that every contribution helps to create lasting opportunities for children to learn, grow, and achieve their potential. Through transparency and commitment, we strive to make a significant difference in the educational landscape of our country.
        </div>
      </div>
    </div>
  );
};

export default Modal;