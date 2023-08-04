import MainProduct from './components/MainProduct/MainProduct';
import PetDiscount from './components/PetDiscount';
import PetTypes from './components/PetTypes';
import Slider from './components/Slider';
import SpecialProducts from './components/SpecialProducts/SpecialProducts';
import UpdatedPost from './components/UpdatedPost/UpdatedPost';

const page = () => {
  return (
    <div>
      <Slider />
      <PetTypes />
      <PetDiscount />
      <MainProduct />
      <SpecialProducts></SpecialProducts>
      <UpdatedPost></UpdatedPost>
    </div>
  );
};

export default page;
