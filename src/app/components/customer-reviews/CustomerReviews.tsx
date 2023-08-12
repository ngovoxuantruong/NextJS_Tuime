import Title from '@/app/components/ui/Title';

import React from 'react';
import Customer from './Customer';

export interface CustomerReviews {
  id: number;
  picture: string;
  name: string;
  comment: string;
}

const customers: CustomerReviews[] = [
  {
    id: 1,
    picture: '',
    name: 'Người Yêu 1 Của Hoài',
    comment:
      'Dịch vụ và các bác sĩ của cửa hàng rất chuyên nghiệp và tận tình. Tư vấn kỹ lưỡng cho vấn đề chăm sóc thú cưng thật tốt',
  },
  {
    id: 2,
    picture: '',
    name: 'Người Yêu 2 Của Hoài',
    comment:
      'Mình sử dụng các loại sản phẩm của cửa hàng rất chất lượng từ thức ăn tới các món đồ chơi cho thú cưng.',
  },
  {
    id: 1,
    picture: '',
    name: 'Người Yêu 1 Của Hoài',
    comment:
      'Khi thú cưng bị bệnh minh thường rất tin tướng dịch vụ khám bệnh của cửa hàng và thú cưng luôn đảm bảo sức khỏe khi khỏi bệnh',
  },
];

const CustomerReviews = () => {
  return (
    <div className="customerReview bg-gray-100">
      <div className="selecteCustomerReview pt-[50px] pb-[70px]">
        <Title label="NHẬN XÉT" h2="Cảm nhận khách hàng"></Title>
        <div className="container">
          <div className="listReview grid grid-cols-3 gap-7 ml-32 mr-32">
            {customers.map((customer) => (
              <Customer key={customer.id} customer={customer}></Customer>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
