'use client';
import { FC } from 'react';
import { FaRegDotCircle } from 'react-icons/fa';
import MultiRangeSlider from '../multi-range-slider/MultiRangeSlider';

interface FilterRangedProps {}

const FilterRanged: FC<FilterRangedProps> = ({}) => {
  return (
    <div className="w-full h-auto top-0 left-0 bg-[#f4f4f4] rounded-[10px] pt-5 px-5 pb-8 mb-8 border-solid border-[#f4f4f4] border-2 relative">
      {/* Title */}
      <div className="w-full h-auto top-0 left-0 mb-4 py-[5px] px-[10px] relative">
        <div className="flex items-center justify-between text-base-100">
          <FaRegDotCircle size="15px" className={'text-primary'} />
          <h2 className="w-[calc(100%-25px)] text-lg text-primary leading-7 relative">
            Giá sản phẩm
          </h2>
        </div>
      </div>

      {/* Ranged logic */}
      <MultiRangeSlider
        min={32000}
        max={1650000}
        onChange={({ min, max }: { min: number; max: number }) =>
          /*          console.log(`min = ${min}, max = ${max}`) */
          console.log('')
        }
      />
    </div>
  );
};

export default FilterRanged;
