import React from 'react';
import { v4 as uuid } from 'uuid';

const genOptions = (categories, onClick) =>
  categories.map((category) => {
    return (
      <div
        key={uuid()}
        className="w-10 mt-5 flex flex-col	items-center justify-center"
      >
        <button type="button" name={category.name} onClick={onClick}>
          <img src={category.img} alt={category.name} />
        </button>
        <span className="text-xs capitalize">{category.name}</span>
      </div>
    );
  });

const LeftPanel = ({ categories, onClick }) => {
  return (
    <div className="flex flex-col	items-center justify-center bg-white h-screen	w-28">
      {genOptions(categories, onClick)}
    </div>
  );
};

export default LeftPanel;
