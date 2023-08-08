import Breadcrumb from '@/app/components/UI/Breadcrumb';
import SpecialProducts from '@/app/components/UI/SpecialProducts';
import specialPicture from '../../../../public/get-image-v4.png';
import { TeamWorks } from '@/app/(route)/introduce/TeamWork/TeamWorks';
import CustomerReviews from './CustomerReviews/CustomerReviews';

const page = () => {
  return (
    <div className="introduce">
      <Breadcrumb></Breadcrumb>
      <SpecialProducts
        orderLeft="order-2"
        orderRight="order-1"
        isButton={false}
        label="GIỚI THIỆU"
        h2="GIỚI THIỆU TUMIE - Hệ thống siêu thị thú cưng"
        picture={specialPicture}
        specialDes="<p> Với kinh nghiệm hơn 5 năm hoạt động trong thị trường 
        thú cưng, ARALE PETSHOP chuyên cung cấp tất cả các đồ dùng, thức ăn, phụ kiện cho chó, mèo.</>
        <p> Luôn cung cấp hàng hóa chất lượng, với giá cạnh tranh nhất thị trường. Luôn lắng nghe khách 
        hàng và tư vấn nhiệt tình nhất để mang đến sự thoải mái khi mua hàng tại shop hay mua hàng qua mạng.
        </p>
        <p> Với phương châm mang đến cho các bạn thú cưng chó mèo có một cuộc sống tốt đẹp nhất, chúng tôi 
        không ngưng tìm hiểu và trau dồi các sản phẩm đang phân phối để đáp ứng kịp nhu cầu phát triển của 
        các bạn thú cưng và thị hiếu của các cô cậu chủ
        </p>
        "
      ></SpecialProducts>

      <TeamWorks></TeamWorks>
      <CustomerReviews></CustomerReviews>
    </div>
  );
};

export default page;
