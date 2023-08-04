import Image from 'next/image';
import Title from '../UI/Title';

const PetTypes = () => {
  const petTypes = [
    { src: '/pet-types/rabbit.png', title: 'Tất cả' },
    { src: '/pet-types/dog.png', title: 'Đồ cho chó' },
    { src: '/pet-types/cat.png', title: 'Đồ cho mèo' },
    { src: '/pet-types/chim.png', title: 'Chim cảnh' },
    { src: '/pet-types/ca.png', title: 'Cá cảnh' },
  ];

  return (
    <section className="w-full h-auto py-[50px] bg-[#f2f2f2] block">
      <div className="container max-w-[1200px]">
        {/* pet title */}
        <Title label={'Chất lượng tốt nhất'} h2={'Các loại thú cưng'} />

        {/* pets */}
        <div className="top-0 left-0 relative block">
          <div className="grid grid-cols-5 auto-rows-auto w-full !h-auto mx-0 min-h-[10px] gap-x-10 gap-y-5 overflow-hidden">
            {petTypes.map(({ src, title }, index) => (
              <article
                key={index}
                className="max-w-full relative overflow-hidden"
              >
                <div className="w-full h-full relative">
                  <a
                    href="#!"
                    className="block mb-5 w-full h-auto top-0 left-0 rounded-full border-dashed border-[#f2f2f2] border-2 relative hover:border-primary"
                  >
                    <Image alt="Tất cả" src={src} width={230} height={230} />
                  </a>
                  <h3 className="relative block w-full h-auto text-base-200 text-2xl top-0 left-0 mb-5 text-center font-medium transition">
                    <a href="#!">{title}</a>
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetTypes;
