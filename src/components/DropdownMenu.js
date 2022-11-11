import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

import { v4 as uuid } from 'uuid';

const dropdownOptions = [
  'Guardar y salir',
  'Salir sin guardar',
  'Guardar y continuar',
];

export default function DropdownMenu() {
  const [open, setOpen] = useState(false);
  const [newValue, setNewValue] = useState('Guardar y salir');

  const handleOnOptionclick = (e) => {
    setNewValue(e.currentTarget.value);
  };

  return (
    <div className="dropdown w-[174px]">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex relative w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-xs font-medium text-gray-700"
      >
        {newValue}
        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
      </button>
      {open ? (
        <ul className="w-40 absolute z-[1] rounded-md border border-gray-300 bg-white px-4 py-2 text-xs min-w-[174px] font-medium text-gray-700">
          {dropdownOptions.map((option) => {
            return (
              <button
                onClick={handleOnOptionclick}
                key={uuid()}
                value={option}
                className="mb-2.5"
              >
                <li className="text-xs">{option}</li>
              </button>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
