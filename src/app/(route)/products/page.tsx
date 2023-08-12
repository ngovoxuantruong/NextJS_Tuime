import Breadcrumb from '@/app/components/ui/Breadcrumb';

const page = () => {
  return (
    <div>
      {<Breadcrumb breadcrumbTitle={[{ title: 'Sản phẩm', src: '#!' }]} />}
      <div className="h-auto py-14"></div>
    </div>
  );
};

export default page;
