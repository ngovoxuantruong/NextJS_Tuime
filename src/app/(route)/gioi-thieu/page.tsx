import Breadcrumb from '@/app/components/ui/Breadcrumb';
import SpecialProducts from '@/app/components/ui/SpecialProducts';
import specialPicture from '../../../../../public/get-image-v4.png';

import CustomerReviews from '../../components/customer-reviews/CustomerReviews';
import { TeamWorks } from '@/app/components/team-work/TeamWorks';
import { TbHeadset, TbBox } from 'react-icons/tb';
import { BiCreditCard } from 'react-icons/bi';
import { BsTruck } from 'react-icons/bs';
const page = () => {
  return (
    <section className="introduce">
      <Breadcrumb breadcrumbTitle={[{ title: 'Giới thiệu', src: '#!' }]} />
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
      <div className="suport pt-[50px] pb-[50px]">
        <div className="container">
          <div className="ml-32 mr-32 flex justify-between items-center">
            <div className="itemSuport flex justify-start items-center ">
              <div className="iconSuport">
                <TbHeadset className="text-5xl text-primary hover:scale-110 ease-in-out transition duration-700"></TbHeadset>
              </div>
              <div className="inForSuport pl-5">
                <h3 className="text-lg font-medium">Hỗ trợ 24/7</h3>
                <p className="text-sm">Tư vấn, giải quyết mọi vấn đề</p>
              </div>
            </div>
            <div className="itemSuport flex justify-start items-center ">
              <div className="iconSuport">
                <TbBox className="text-5xl text-primary hover:scale-110 ease-in-out transition duration-700"></TbBox>
              </div>
              <div className="inForSuport pl-5">
                <h3 className="text-lg font-medium">Hỗ trợ đổi trả</h3>
                <p className="text-sm">Trong vòng 7 ngày</p>
              </div>
            </div>
            <div className="itemSuport flex justify-start items-center ">
              <div className="iconSuport">
                <BiCreditCard className="text-5xl text-primary hover:scale-110 ease-in-out transition duration-700"></BiCreditCard>
              </div>
              <div className="inForSuport pl-5">
                <h3 className="text-lg font-medium">Thanh toán đa dạng</h3>
                <p className="text-sm">Ví Momo, ZaloPay, Mastercard...</p>
              </div>
            </div>
            <div className="itemSuport flex justify-start items-center ">
              <div className="iconSuport">
                <BsTruck className="text-5xl text-primary hover:scale-110 ease-in-out transition duration-700"></BsTruck>
              </div>
              <div className="inForSuport pl-5">
                <h3 className="text-lg font-medium">Miễn phí giao hàng</h3>
                <p className="text-sm">Với đơn hàng từ 500K</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
