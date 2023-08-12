import Blog from '../../components/ui/Blog';

const NewsContentRight = () => {
  const post = [
    {
      title: '5 điều bạn nên làm cho chú chó của mình',
      date: '08/08/2023',
      view: 165,
    },
  ];

  return (
    <div>
      <Blog post={post} />
    </div>
  );
};

export default NewsContentRight;
