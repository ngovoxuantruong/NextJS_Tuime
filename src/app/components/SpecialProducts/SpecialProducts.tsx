import React from 'react';
import Title from '../UI/Title';
import Image from 'next/image';
import specialPicture from '../../../../public/get-image-v3.png';
const SpecialProducts = () => {
  return (
    <div className="specialProducts pt-[50px] pb-[50px]">
      <div className="container max-w-[1200px]">
        <div className="selectSpecialProduct grid grid-cols-2 gap-10">
          <div className="specialProductsLeft">
            <Title label="CHẤT LƯỢNG TỐT NHẤT" h2="Sản Phẩm Đặt Biệt"></Title>
            <div className="productIntroduction mb-5 text-base text-justify">
              <p className="mb-4">
                Rất nhiều nghiên cứu đã chỉ ra rằng: Những người nuôi thú cưng
                thường khỏe mạnh, chu đáo và hướng ngoại so với những người
                khác. Đó là lý do mà rất nhiều gia đình hiện nay đều nuôi một
                vài thú cưng để giúp không khí gia đình trở nên ấm cúng và vui
                nhộn hơn. Tuy nhiên, việc chọn được địa điểm mua đồ dùng, quần
                áo, thức ăn.. cho thú cưng, chó mèo ở đâu vừa đảm bảo chất lượng
                mà giá cả hợp lý thì không phải dễ dàng.
              </p>
              <p className="mb-4">
                Đáp ứng nhu cầu này, TUMIE ra đời với sứ mệnh cung cấp tất cả
                các sản phẩm trọn gói dành cho thú cưng, chó mèo: từ thức ăn,
                quần áo, đồ dùng, thức ăn dinh dưỡng, đồ chơi, mỹ phẩm, nhà lồng
                chuồng nệm và linh phụ kiện khác … đến từ các nhà sản xuất uy
                tín trên thế giới.
              </p>
            </div>
            <button className="bg-secondary pl-[30px] pr-[30px] pb-[10px] pt-[10px] rounded-full">
              XEM NGAY
            </button>
          </div>
          <div className="specialProductsRight">
            <Image src={specialPicture} width={600} alt=""></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProducts;
