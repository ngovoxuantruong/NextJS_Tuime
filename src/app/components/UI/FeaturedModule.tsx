import Link from 'next/link';
import { FC } from 'react';
import { FaRegDotCircle } from 'react-icons/fa';
import { BsCalendarCheck } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';

interface FeaturedModuleProps {
  featuredTitles: string;
  featuredContent: {
    title: string;
    description?: string | number;
    date?: string;
    view?: number;
  }[];
}

const FeaturedModule: FC<FeaturedModuleProps> = ({
  featuredTitles,
  featuredContent,
}) => {
  return (
    <div className="w-full h-auto top-0 left-0 bg-[#f4f4f400] rounded-[10px] pt-5 px-5 pb-8 mb-8 border-solid border-[#f4f4f4] border-2 relative">
      {/* Title */}
      <div className="w-full h-auto top-0 left-0 mb-4 bg-primary py-[5px] px-[10px] relative">
        <div className="flex items-center justify-between text-base-100">
          <FaRegDotCircle size="15px" />
          <h2 className="w-[calc(100%-25px)] text-lg leading-7 relative">
            {featuredTitles}
          </h2>
        </div>
      </div>

      {/* List */}
      <div className="repeater-box grid-cols-1 auto-rows-auto gap-4">
        {featuredContent.map(({ title, description, date, view }, index) => (
          <article
            key={index}
            className="repeater-item border-dashed border-primary border-b-[1px]"
          >
            <div className="w-full h-auto overflow-visible top-0 left-0 relative">
              <div className="flex justify-between items-start">
                {/* Image */}
                <div className="w-[30%] h-auto rounded-md overflow-hidden mb-5 relative">
                  <Link
                    href={'#!'}
                    className="bg-[url('/featured/dog.jpg')] background-widget hover:scale-110"
                  ></Link>
                </div>

                {/* Content */}
                <div className="w-[70%] pl-4 relative">
                  {/* Date & view */}
                  {date && view && (
                    <div className="w-full h-auto top-0 left-0 mb-4 relative">
                      <div className="flex items-center text-[13px]">
                        <Link
                          href={'#!'}
                          className="w-fit text-primary text-center mr-3"
                        >
                          <span className="inline-flex items-center justify-center px-[5px]">
                            <BsCalendarCheck />
                          </span>
                          <span className="inline-block">{date}</span>
                        </Link>

                        <Link
                          href={'#!'}
                          className="w-fit text-primary text-center mr-3"
                        >
                          <span className="inline-flex items-center justify-center px-[5px]">
                            <FiUsers />
                          </span>
                          <span className="inline-block">{view}</span>
                        </Link>
                      </div>
                    </div>
                  )}

                  <h3 className="w-full h-auto text-base-200 text-base top-0 left-0 mb-[5px] text-left leading-7 duration-300 font-medium line-clamp-2 relative hover:text-primary">
                    <Link href={'#!'} title={title}>
                      {title}
                    </Link>
                  </h3>
                  <div className="text-left mb-4 text-sm leading-6 relative line-clamp-2">
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default FeaturedModule;
