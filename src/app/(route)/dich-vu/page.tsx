import Breadcrumb from '@/app/components/ui/Breadcrumb';
import ServiceLeftContent from '@/app/(route)/dich-vu/ServiceContentLeft';
import ServiceRightContent from '@/app/(route)/dich-vu/ServiceContentRight';

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
