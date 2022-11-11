import React from 'react';
import { ChevronLeftIcon } from '@heroicons/react/20/solid';

const MenuSlider = (props) => {
  const { title, children, showGoBackButton, onReturnClick, category } = props;

  return (
    <div className="h-screen bg-[#F7F7F7] flex flex-col p-2.5 w-96 absolute left-24">
      {showGoBackButton ? (
        <button
          className="text-xs font-medium text-gray-700 flex mb-1.5 items-center text-[#B3B3B3]"
          onClick={onReturnClick}
          type="button"
        >
          <ChevronLeftIcon className="-mr-1 h-5 w-5" aria-hidden="true" />
          {category}
        </button>
      ) : null}
      <span className="text-gray-700 mb-1.5 font-bold pl-1 capitalize text-[#707070]">
        {title}
      </span>
      {children}
    </div>
  );
};

export default MenuSlider;
