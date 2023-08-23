'use client';
import clsx from 'clsx';
import { FC, useState } from 'react';
import { FaRegDotCircle } from 'react-icons/fa';

interface FilterBrandProps {}

const FilterBrand: FC<FilterBrandProps> = ({}) => {
  const checkboxBrands = [
    { label: 'JBL', isChecked: false },
    { label: 'Tropical', isChecked: false },
    { label: 'Tetra', isChecked: false },
    { label: 'VVA Khánh Long', isChecked: false },
  ];

  const [checkboxData, setCheckboxData] = useState(checkboxBrands);

  const handleCheckboxChange = (checkboxIndex: number) => {
    const updatedCheckboxData = [...checkboxData];
    updatedCheckboxData[checkboxIndex].isChecked =
      !updatedCheckboxData[checkboxIndex].isChecked;

    setCheckboxData(updatedCheckboxData);
  };

  return (
    <div className="w-full h-auto top-0 left-0 bg-[#f4f4f4] rounded-[10px] pt-5 px-5 pb-8 mb-8 border-solid border-[#f4f4f4] border-2 relative">
      {/* Title */}
      <div className="w-full h-auto top-0 left-0 mb-4 py-[5px] px-[10px] relative">
        <div className="flex items-center justify-between text-base-100">
          <FaRegDotCircle size="15px" className={'text-primary'} />
          <h2 className="w-[calc(100%-25px)] text-lg leading-7 relative text-primary">
            Thương hiệu
          </h2>
        </div>
      </div>

      {/* Checkbox */}
      <div className="w-auto h-auto top-0 left-0 relative">
        <div className="flex w-full h-full flex-col flex-wrap">
          {checkboxData.map(({ label, isChecked }, checkboxIndex) => (
            <label
              key={checkboxIndex}
              className="mb-3 text-base-200 block relative"
            >
              <input
                className="hidden"
                type="checkbox"
                checked={isChecked}
                onChange={() => handleCheckboxChange(checkboxIndex)}
              />
              <span
                className={clsx(
                  'h-[25px] w-[25px] border border-solid border-[#ccc] inline-block mr-1 ',
                  isChecked ? 'aftercheckbox' : '',
                )}
              />
              <span className="inline align-top">{label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBrand;
