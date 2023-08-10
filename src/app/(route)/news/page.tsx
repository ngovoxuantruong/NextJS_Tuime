import Breadcrumb from '@/app/components/UI/Breadcrumb';
import News from '@/app/components/news/News';

const page = () => {
  return (
    <div>
      <Breadcrumb h2='Tin tức' label='TIN TỨC' />
      <div className="h-auto py-14">
        <News />
      </div>
    </div>
  );
};

export default page;
