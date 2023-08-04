import Banner from './components/Banner';
import HotDeals from './components/HotDeals';
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
      <Banner />
      <HotDeals />
      <SpecialProducts />
      <UpdatedPost />
    </div>
  );
};

export default page;
