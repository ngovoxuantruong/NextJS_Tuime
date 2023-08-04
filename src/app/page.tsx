import Banner from './components/Banner';
import MainProduct from './components/MainProduct';
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
      <Banner />
    </div>
  );
};

export default page;
