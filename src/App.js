import React, { useEffect, useState } from 'react';

import MenuSlider from './components/MenuSlider';
import Header from './components/Header';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';
import aberturasIcon from './assets/images/aberturasIcon.png';
import equipamientoIcon from './assets/images/equipamientoIcon.png';
import terminacionesIcon from './assets/images/terminacionesIcon.png';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import imageNotAvailable from './assets/images/imageNotAvailable.png';

import { v4 as uuid } from 'uuid';

import { getCategoryIndex } from './helpers';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);
  const [subcategoryItems, setSubcategoryItems] = useState([]);

  const [subcategories, setSubcategories] = useState([]);
  const [categories, setCategories] = useState([
    {
      name: 'aberturas',
      img: aberturasIcon,
    },
    {
      name: 'equipamiento',
      img: equipamientoIcon,
    },
    {
      name: 'terminaciones',
      img: terminacionesIcon,
    },
  ]);

  const handleOnCategoryClick = (e) => {
    const selectedcategory = e.currentTarget.name;

    setSelectedCategory(selectedcategory);

    const index = getCategoryIndex(selectedcategory, categories);

    // get subcategories for selected category
    const selectedSubcategories = subcategories[index];

    setSelectedSubcategories(selectedSubcategories);

    setMenuOpen(true);
  };

  const handleOnSubcategoryClick = (e) => {
    const selectedSubcategory = e.currentTarget.name;
    setSelectedSubcategory(selectedSubcategory);

    const index = getCategoryIndex(selectedSubcategory, selectedSubcategories);

    //get list items for selected subcategory
    const items = selectedSubcategories[index].items;

    setSubcategoryItems(items);

    setMenuOpen(false);
    setSubmenuOpen(true);
  };

  const onGoBackButtonClick = () => {
    setSubmenuOpen(false);
    setMenuOpen(true);
  };

  const getSubcategories = () => {
    try {
      const subcategories = categories.map(async (category) => {
        const response = await fetch(
          `https://us-central1-prueba-front-280718.cloudfunctions.net/${category.name}`
        );
        const subcategories = await response.json();
        return subcategories;
      });
      Promise.all(subcategories).then((data) => {
        setSubcategories(data);
      });
    } catch (e) {
      console.log('error: ', e);
    }
  };

  useEffect(() => {
    getSubcategories();
  }, []);

  const genSubcategoryOptions = () =>
    selectedSubcategories.map((subcategory) => {
      return (
        <div key={uuid()}>
          <button
            type="button"
            name={subcategory.name}
            onClick={handleOnSubcategoryClick}
            className={
              'w-full mb-1.5 flex justify-between rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 '
            }
          >
            <span className="text-xs">{subcategory.name}</span>
            <ChevronRightIcon
              className="-mr-1 ml-2 h-5 w-5"
              aria-hidden="true"
            />
          </button>
        </div>
      );
    });

  const genSubcategoryItems = () =>
    subcategoryItems.map((item) => {
      return (
        <div key={uuid()} className="flex flex-col h-24 items-center my-5">
          <img
            className="w-full h-full mb-1.5"
            onError={(e) => {
              e.target.src = imageNotAvailable;
            }}
            src={item.img}
            alt={item.name}
          />
          <span className="text-xs font-medium text-gray-700 text-[#707070]">
            {item.name}
          </span>
        </div>
      );
    });

  return (
    <>
      <Header />
      <div className="flex relative">
        <LeftPanel onClick={handleOnCategoryClick} categories={categories} />
        <RightPanel />
        {menuOpen && (
          <MenuSlider title={selectedCategory}>
            {genSubcategoryOptions()}
          </MenuSlider>
        )}
        {submenuOpen && (
          <MenuSlider
            title={selectedSubcategory}
            showGoBackButton
            onReturnClick={onGoBackButtonClick}
            category={selectedCategory}
          >
            <div className="flex flex-wrap justify-around">
              {genSubcategoryItems()}
            </div>
          </MenuSlider>
        )}
      </div>
    </>
  );
};

export default App;
