import Link from 'next/link';
import { Button } from './Button';
import { FC } from 'react';
import { BsCalendarCheck } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';

interface BlogProps {
  post: { title: string; description?: string; date?: string; view?: number }[];
}

const Blog: FC<BlogProps> = ({ post }) => {
  return (
    <div className="repeater-box grid-cols-2 auto-rows-auto gap-5">
      {post.map(({ title, description, date, view }, index) => (
        <article
          key={index}
          className="repeater-item border-solid border-[#f5f4f5] border-2 rounded-md pb-6 px-4 pt-4"
        >
          <div className="w-full h-full relative">
            {/* Image link */}
            <div className="w-full h-[276px] top-0 left-0 rounded-md overflow-hidden mb-5 relative">
              <Link
                href={'#!'}
                className='bg-[url("/blog/dog.jpg")] background-widget hover:scale-110'
              ></Link>
            </div>

            {/* Date & view */}
            {date && view && (
              <div className="w-full h-auto top-0 left-0 mb-4 relative">
                <div className="flex items-center justify-center">
                  <Link
                    href={'#!'}
                    className="w-fit text-primary text-base text-center mr-3 font-medium"
                  >
                    <span className="inline-flex items-center justify-center px-[5px]">
                      <BsCalendarCheck />
                    </span>
                    <span className="inline-block">{date}</span>
                  </Link>

                  <Link
                    href={'#!'}
                    className="w-fit text-primary text-base text-center mr-3 font-medium"
                  >
                    <span className="inline-flex items-center justify-center px-[5px]">
                      <FiUsers />
                    </span>
                    <span className="inline-block">{view}</span>
                  </Link>
                </div>
              </div>
            )}

            {/* Content */}
            <div className="w-full h-auto top-0 left-0 rounded-md relative">
              <div className="w-full h-full relative">
                <h3 className="h-[60px] w-full text-base-200 text-[22px] top-0 left-0 text-center leading-8 duration-300  font-medium relative hover:text-primary">
                  <Link href={'#!'}>{title}</Link>
                </h3>
                <div className="w-full h-auto top-0 left-0 text-base-200 text-[15px]  text-center line-clamp-3 mb-4 relative">
                  <p>{description}</p>
                </div>
                <div className="w-1/2 mx-auto">
                  <Button>Tìm hiểu thêm</Button>
                </div>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Blog;
