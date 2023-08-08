import Banner from './components/homepage/Banner';
import HotDeals from './components/homepage/HotDeals';
import MainProduct from './components/homepage/MainProduct';
import PetDiscount from './components/homepage/PetDiscount';
import PetTypes from './components/homepage/PetTypes';
import Slider from './components/homepage/Slider';
import SpecialProducts from './components/UI/SpecialProducts';
import UpdatedPost from './components/homepage/UpdatedPost';
import specialPicture from '../../public/get-image-v3.png';

export interface specialDesProp {
  text: string;
}

// const specialDes: specialDesProp[] = [
//   {
//     text: 'Rất nhiều nghiên cứu đã chỉ ra rằng: Những người nuôi thú cưng thường khỏe mạnh, chu đáo và hướng ngoại so với những người khác. Đó là lý do mà rất nhiều gia đình hiện nay đều nuôi một vài thú cưng để giúp không khí gia đình trở nên ấm cúng và vui nhộn hơn. Tuy nhiên, việc chọn được địa điểm mua đồ dùng, quần áo, thức ăn.. cho thú cưng, chó mèo ở đâu vừa đảm bảo chất lượng mà giá cả hợp lý thì không phải dễ dàng.',
//   },
//   {
//     text: '   Đáp ứng nhu cầu này, TUMIE ra đời với sứ mệnh cung cấp tất cả các sản phẩm trọn gói dành cho thú cưng, chó mèo: từ thức ăn, quần áo, đồ dùng, thức ăn dinh dưỡng, đồ chơi, mỹ phẩm, nhà lồng chuồng nệm và linh phụ kiện khác … đến từ các nhà sản xuất uy tín trên thế giới.',
//   },
// ];

const page = () => {
  return (
    <div>
      <Slider />
      <PetTypes />
      <PetDiscount />
      <MainProduct />
      <Banner />
      <HotDeals />
      <SpecialProducts
        orderLeft="order-1"
        orderRight="order-2"
        isButton={true}
        label="CHẤT LƯỢNG TỐT NHẤT"
        h2="Sản Phẩm Đặt Biệt"
        picture={specialPicture}
        specialDes="<p> Rất nhiều nghiên cứu đã chỉ ra rằng: Những người nuôi thú cưng 
        khác. Đó là lý do mà rất nhiều gia đình hiện nay đều nuôi một
        vài thú cưng để giúp không khí gia đình trở nên ấm cúng và vui
        nhộn hơn. Tuy nhiên, việc chọn được địa điểm mua đồ dùng, quần
        áo, thức ăn.. cho thú cưng, chó mèo ở đâu vừa đảm bảo chất lượng
        mà giá cả hợp lý thì không phải dễ dàng.</>
        <p> Đáp ứng nhu cầu này, TUMIE ra đời với sứ mệnh cung cấp tất cả
        các sản phẩm trọn gói dành cho thú cưng, chó mèo: từ thức ăn,
        quần áo, đồ dùng, thức ăn dinh dưỡng, đồ chơi, mỹ phẩm, nhà lồng
        chuồng nệm và linh phụ kiện khác đến từ các nhà sản xuất uy
        tín trên thế giới.</p>
        "
      />
      <UpdatedPost />
    </div>
  );
};

export default page;
