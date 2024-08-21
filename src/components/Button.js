import React from 'react';

const Button = ({ title, activeClass, _callback }) => {
  const baseClasses = "inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto";
  return (
    <button className={`${baseClasses} ${activeClass}`} onClick={_callback}>
      {title}
    </button>
  );
};

export default Button;
