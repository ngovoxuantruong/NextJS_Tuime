import ServiceLeftContent from './ServiceContentLeft';
import ServiceRightContent from './ServiceContentRight';

const ServiceContent = () => {
  return (
    <div className="container max-w-[1200px] flex ">
      <div className="container-group-left">
        <ServiceLeftContent />
      </div>
      <div className="container-group-right">
        <ServiceRightContent />
      </div>
    </div>
  );
};

export default ServiceContent;
