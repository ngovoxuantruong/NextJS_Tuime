import CategoryModule from '../UI/CategoryModule';
import FeaturedModule from '../UI/FeaturedModule';

const ServiceContentLeft = () => {
  // Category menu
  const menu = [
    { title: 'Dịch vụ phối giống', pathName: '#!' },
    { title: 'Dịch vụ khám sức khoẻ Pet', pathName: '#!' },
    { title: 'Dịch vụ chăm sóc Pet', pathName: '#!' },
  ];

  // Featured content
  const content = [
    {
      title: 'Pet Grooming & spa',
      description:
        'Ngày nay, việc nuôi thú cưng là một việc mà rất nhiều người yêu thích, bởi lẽ đối với mỗi người, thú cưng giống như là một người bạn thân thiết của họ vậy. Không chỉ quan tâm chăm sóc tới sức khỏe một cách tốt nhất cho thú cưng mà việc làm đẹp cho chúng cũng được rất nhiều người quan tâm.',
    },
    {
      title: 'Dịch vụ chăm sóc răng miệng toàn diện cho chó mèo.',
      description:
        'Chăm sóc răng miệng cho chó mèo là việc hết sức quan trọng nhưng dễ bị bỏ qua trong quá trình chăm sóc thú cưng. Việc không quan tâm đến sức khỏe răng miệng cho thú cưng sẽ dẫn đến nhiều hệ lụy, ảnh hưởng trực tiếp đến sức khỏe thú cưng, và đến các bộ phận bên trong cơ thể nghiêm trọng.',
    },
  ];

  return (
    <div>
      <CategoryModule categoryTitle="Danh mục dịch vụ" menu={menu} />
      <FeaturedModule
        featuredTitles="Dịch vụ nổi bật"
        featuredContent={content}
      />
    </div>
  );
};

export default ServiceContentLeft;
