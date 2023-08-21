import Link from 'next/link';
import { FC } from 'react';
import { FaRegDotCircle } from 'react-icons/fa';

interface FilterTagsProps {}

const FilterTags: FC<FilterTagsProps> = ({}) => {
  const tags = [
    { title: 'pet', pathName: '#!' },
    { title: 'thú cưng', pathName: '#!' },
    { title: 'vật nuôi trong nhà', pathName: '#!' },
    { title: 'vật nuôi cảnh', pathName: '#!' },
    { title: 'vật nuôi kiểng', pathName: '#!' },
    { title: 'cửa hàng thú cưng', pathName: '#!' },
    { title: 'thức ăn thức cưng', pathName: '#!' },
    { title: 'đồ chơi cho pet', pathName: '#!' },
    { title: 'dịch vụ thú cưng', pathName: '#!' },
    { title: 'spa thú cưng', pathName: '#!' },
    { title: 'thức ăn chó', pathName: '#!' },
    { title: 'thức ăn mèo', pathName: '#!' },
  ];

  return (
    <div className="w-full h-auto top-0 left-0 bg-[#f4f4f4] rounded-[10px] pt-5 px-5 pb-8 mb-8 border-solid border-[#f4f4f4] border-2 relative">
      {/* Title */}
      <div className="w-full h-auto top-0 left-0 mb-4  py-[5px] px-[10px] relative">
        <div className="flex items-center justify-between text-base-100">
          <FaRegDotCircle size="15px" className="text-primary" />
          <h2 className="w-[calc(100%-25px)] text-lg text-primary leading-7 relative">
            Tags
          </h2>
        </div>
      </div>

      {/* Tags */}
      <div className="p-[5px] w-full h-auto top-0 left-0 relative overflow-hidden">
        {tags.map(({ title, pathName }, index) => (
          <span
            key={index}
            className="inline-block py-[3px] px-5 m-2 bg-[#dddddd] text-sm cursor-pointer hover:bg-secondary hover:text-primary"
          >
            <Link href={pathName}>{title}</Link>
          </span>
        ))}
      </div>
    </div>
  );
};

export default FilterTags;
