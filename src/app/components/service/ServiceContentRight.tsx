import Blog from '../UI/Blog';

const ServiceContentRight = () => {
  const post = [
    {
      title: 'Dịch vụ phối giống chó',
      description:
        'Phối giống chó là trường hợp chủ không triệt sản thú cưng và muốn nhân giống có chọn lọc. Tuy nhiên, phối giống chó mèo không phải là điều đơn giản, cần được thực hiện bởi những bác sĩ thú ý giỏi và những chuyên gia phối giống có tay nghề cao.',
    },
  ];

  return (
    <div>
      <Blog post={post} />
    </div>
  );
};

export default ServiceContentRight;
