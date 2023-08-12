import Breadcrumb from '@/app/components/ui/Breadcrumb';
import ServiceLeftContent from '@/app/(route)/service/ServiceContentLeft';
import ServiceRightContent from '@/app/(route)/service/ServiceContentRight';

const page = () => {
  return (
    <div>
      <Breadcrumb breadcrumbTitle={[{ title: 'Dịch vụ', src: '#!' }]} />
      <div className="container max-w-[1200px] flex h-auto py-14">
        <div className="container-group-left">
          <ServiceLeftContent />
        </div>
        <div className="container-group-right">
          <ServiceRightContent />
        </div>
      </div>
    </div>
  );
};

export default page;
