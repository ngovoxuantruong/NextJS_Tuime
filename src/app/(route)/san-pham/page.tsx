import Breadcrumb from '@/app/components/ui/Breadcrumb';
import ProductLeftContent from './ProductLeftContent';
import ProductRightContent from './ProductRightContent';

const page = () => {
  return (
    <div>
      {<Breadcrumb breadcrumbTitle={[{ title: 'Sản phẩm', src: '#!' }]} />}
      <div className="container max-w-[1200px] flex h-auto py-14">
        <div className="container-group-left !w-1/4">
          <ProductLeftContent />
        </div>
        <div className="container-group-right">
          <ProductRightContent />
        </div>
      </div>
    </div>
  );
};

export default page;
