import NewsContentLeft from './NewsContentLeft';
import NewsContentRight from './NewsContentRight';

const News = () => {
  return (
    <div className="container max-w-[1200px] flex ">
      <div className="container-group-left">
        <NewsContentLeft />
      </div>
      <div className="container-group-right">
        <NewsContentRight />
      </div>
    </div>
  );
};

export default News;
