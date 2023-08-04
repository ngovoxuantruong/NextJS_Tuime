import Banner from './components/homepage/Banner';
import HotDeals from './components/homepage/HotDeals';
import MainProduct from './components/homepage/MainProduct';
import PetDiscount from './components/homepage/PetDiscount';
import PetTypes from './components/homepage/PetTypes';
import Slider from './components/homepage/Slider';
import SpecialProducts from './components/homepage/SpecialProducts';
import UpdatedPost from './components/homepage/UpdatedPost';

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
