import Breadcrumb from '@/app/components/UI/Breadcrumb';
import ServiceContent from '@/app/components/service/ServiceContent';

const page = () => {
  return (
    <div>
      <Breadcrumb label="DỊCH VỤ" h2="Dịch vụ" />
      <div className="h-auto py-14">
        <ServiceContent />
      </div>
    </div>
  );
};

export default page;
