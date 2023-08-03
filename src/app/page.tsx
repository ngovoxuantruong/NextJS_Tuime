import MainProduct from './components/MainProduct/MainProduct';
import PetDiscount from './components/PetDiscount';
import PetTypes from './components/PetTypes';
import Slider from './components/Slider';

const page = () => {
  return (
    <div>
      <Slider />
      <PetTypes />
      <PetDiscount />
      <MainProduct />
    </div>
  );
};

export default page;
