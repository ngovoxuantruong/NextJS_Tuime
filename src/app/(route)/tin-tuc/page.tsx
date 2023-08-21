import Breadcrumb from '@/app/components/ui/Breadcrumb';
import NewsContentLeft from '@/app/(route)/tin-tuc/NewsContentLeft';
import NewsContentRight from '@/app/(route)/tin-tuc/NewsContentRight';

const page = () => {
  return (
    <div>
      <Breadcrumb breadcrumbTitle={[{ title: 'Tin tức', src: '#!' }]} />
      <div className="container max-w-[1200px] flex h-auto py-14">
        <div className="container-group-left">
          <NewsContentLeft />
        </div>
        <div className="container-group-right">
          <NewsContentRight />
        </div>
      </div>
    </div>
  );
};

export default page;
