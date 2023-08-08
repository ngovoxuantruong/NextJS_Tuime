import CategoryModule from '../UI/CategoryModule';
import FeaturedModule from '../UI/FeaturedModule';
import Search from '../UI/Search';

const NewsContentLeft = () => {
  // Category menu
  const menu = [
    { title: 'Kiến thức', pathName: '#!' },
    { title: 'Hỏi - Đáp', pathName: '#!' },
  ];

  // Featured content
  const content = [
    {
      title: '5 điều bạn nên làm cho chú chó của mình',
      date: '08/08/2023',
      view: 165,
    },
    {
      title: 'Vì sao mèo có thể nhìn thấy rõ khi vào ban đêm?',
      date: '06/08/2023',
      view: 50,
    },
  ];

  return (
    <div>
      <Search />
      <CategoryModule categoryTitle="Danh mục tin tức" menu={menu} />
      <FeaturedModule
        featuredTitles="Bài viết nổi bật"
        featuredContent={content}
      />
    </div>
  );
};

export default NewsContentLeft;
