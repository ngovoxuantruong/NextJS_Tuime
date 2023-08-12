import { Button } from '../ui/Button';

const Banner = () => {
  return (
    /* section left */
    <section className="w-full h-full max-w-full flex justify-center flex-wrap mt-12 relative top-0 bottom-0 z-[5] bg-primary">
      <section className="w-1/3 order-1 block">
        <div className="container-child">
          <div className="w-full h-auto top-0 left-1/2 -translate-x-1/2 clip-path-banner bg-secondary p-14 z-[1] relative">
            <div className="w-1/2 h-[300px] bg-[url('/banner/dog.png')] bg-no-repeat bg-center bg-contain top-0 left-1/2 translate-y-0 -translate-x-1/2 relative"></div>
          </div>
        </div>
      </section>

      {/* section center */}
      <section className="w-1/3 order-2 block">
        <div className="container-child ">
          <div className="w-full h-auto top-1/2 left-0 translate-x-0 -translate-y-1/2 bg-contain bg-no-repeat bg-center absolute">
            <div className="w-full h-auto top-0 left-0 text-secondary text-lg text-center mb-[5px] tracking-widest uppercase">
              Chất lượng tốt nhất
            </div>
            <h2 className="h-auto w-full text-base-100 text-[40px] top-0 left-0 text-center font-medium relative block">
              Ưu đãi đặc biệt
            </h2>
            <div className="h-auto w-full top-0 left-0 text-base-100 text-lg text-center mb-5 leading-7 block relative">
              Với chất lượng dịch vụ tốt nhất luôn được khách hàng tin tưởng sẽ
              là điểm đến lý tưởng và tuyệt vời dành cho vật nuôi.
            </div>
            <div className="h-auto w-full top-0 left-0 text-base-100 text-lg text-center mb-5 leading-7 block relative">
              <Button variant={'secondary'}>Xem ngay</Button>
            </div>
          </div>
        </div>
      </section>

      {/* section right */}
      <section className="w-1/3 order-3 block">
        <div className="container-child">
          <div className="w-full h-auto top-0 left-0 translate-x-0 translate-y-0 p-[50px]">
            <div className="w-1/2 h-[300px] bg-[url('/banner/cat.png')] bg-no-repeat bg-center bg-contain top-0 left-1/2 translate-y-0 -translate-x-1/2 relative"></div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Banner;
