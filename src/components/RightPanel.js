import React from 'react';

import zoomInIcon from '../assets/images/zoomInIcon.png';
import zoomInOutIcon from '../assets/images/zoomOutIcon.png';
import moveTopIcon from '../assets/images/moveTopIcon.png';
import { Button } from './common/Button';

import { v4 as uuid } from 'uuid';

const zoomOptions = [
  { name: 'zoomIn', icon: zoomInIcon },
  { name: 'zoomOut', icon: zoomInOutIcon },
];

const topOptions = ['Fijar', 'Borrar'];

const OnTopOptions = () => {
  return (
    <div className="flex absolute right-2	top-2.5">
      {topOptions.map((option) => (
        <Button
          key={uuid()}
          className="my-2 mr-2.5 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700"
          name={option}
        >
          {option}
        </Button>
      ))}
    </div>
  );
};

const NavigationOptions = () => {
  return (
    <div
      onClick={() => console.log('navigation button was clicked ')}
      className="rounded-md border border-gray-300 bg-white absolute w-[46px] h-[60px] bottom-2 right-2.5"
    >
      <div className="absolute left-1/4">
        <button className="w-5">
          <img src={moveTopIcon} alt="navigate top" />
        </button>
      </div>
      <div className="absolute rotate-90 top-1/4 left-2/4">
        <button className="w-5">
          <img src={moveTopIcon} alt="nagivate right" />
        </button>
      </div>
      <div className="absolute rotate-180 left-1/4 top-2/4">
        <button className="w-5">
          <img src={moveTopIcon} alt="navigate down" />
        </button>
      </div>
      <div className="absolute -rotate-90 left-0 top-1/4">
        <button className="w-5">
          <img src={moveTopIcon} alt="navigate left" />
        </button>
      </div>
    </div>
  );
  {
  }
};

const ZoomOptions = () => {
  return (
    <div className="flex flex-col absolute right-36 bottom-2 w-12">
      {zoomOptions.map((option) => (
        <Button
          key={uuid()}
          className="w-12 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700"
          name={option.name}
        >
          <img src={option.icon} alt={option.name}></img>
        </Button>
      ))}
    </div>
  );
};

const RightPanel = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#EFEFEF] w-full">
      <OnTopOptions />
      <ZoomOptions />
      <NavigationOptions />
    </div>
  );
};

export default RightPanel;
