import Link from 'next/link';
import { FC } from 'react';
import { FaRegDotCircle } from 'react-icons/fa';

interface ProductCategoryProps {
  categoryTitle: string;
  menu: { title: string; pathName: string }[];
}

const ProductCategory: FC<ProductCategoryProps> = ({ categoryTitle, menu }) => {
  return (
    <div className="w-full h-auto top-0 left-0 bg-[#f4f4f4] rounded-[10px] pt-5 px-5 pb-8 mb-8 border-solid border-[#f4f4f4] border-2 relative">
      {/* Title */}
      <div className="w-full h-auto top-0 left-0 mb-4  py-[5px] px-[10px] relative">
        <div className="flex items-center justify-between text-base-100">
          <FaRegDotCircle size="15px" className={'text-primary'} />
          <h2 className="w-[calc(100%-25px)] text-lg text-primary leading-7 relative">
            {categoryTitle}
          </h2>
        </div>
      </div>

      {/* List */}
      <div className="w-full h-auto overflow-visible top-0 left-0 relative">
        <ul className="w-full m-0 p-0 flex flex-col relative">
          {menu.map(({ title, pathName }, index) => (
            <li key={index} className="w-full mb-3">
              <div className="text-base-200 text-base font-light border-dashed border-primary border-b pb-[10px] hover:text-primary duration-200">
                <Link href={pathName}>{title}</Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductCategory;
