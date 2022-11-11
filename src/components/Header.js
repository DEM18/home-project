import DropdownMenu from './DropdownMenu';
import logo from '../assets/images/logo.png';
import { Button } from './common/Button';

const LeftContainer = () => {
  return (
    <div className="flex items-center lg:w-0 lg:flex-1">
      <img src={logo} className="h-8 w-auto sm:h-10 mr-2.5" alt="logo" />
      <Button className="whitespace-nowrap text-sm font-normal font-bold text-white">
        Editar medidas
      </Button>
    </div>
  );
};

const RightContainer = () => {
  return (
    <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
      <Button
        className="whitespace-nowrap text-base mr-2.5 font-medium  text-white"
        name="nuevo proyecto"
      >
        nuevo proyecto
      </Button>
      <DropdownMenu />
    </div>
  );
};

const Header = () => {
  return (
    <div
      className={`flex items-center justify-between py-4 px-28 relative bg-[#333333]`}
    >
      <LeftContainer />
      <RightContainer />
    </div>
  );
};

export default Header;
