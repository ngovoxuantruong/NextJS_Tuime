'use client';
import clsx from 'clsx';
import React, { FC, useState } from 'react';
import { FaRegDotCircle } from 'react-icons/fa';

interface FilterWeightProps {}

const FilterWeight: FC<FilterWeightProps> = ({}) => {
  const checkboxProducts = [
    {
      categoryName: 'Thể tích',
      checkboxes: [{ label: '270ml', isChecked: false }],
    },
    {
      categoryName: 'Chiều dài',
      checkboxes: [{ label: '21cm', isChecked: false }],
    },
    {
      categoryName: 'Khối lượng',
      checkboxes: [
        { label: '0.5kg', isChecked: false },
        { label: '0.1kg', isChecked: false },
        { label: '3kg', isChecked: false },
        { label: '10kg', isChecked: false },
      ],
    },
  ];

  const [checkboxData, setCheckboxData] = useState(checkboxProducts);

  const handleCheckboxChange = (
    categoryIndex: number,
    checkboxIndex: number,
  ) => {
    const updatedCheckboxData = [...checkboxData];
    updatedCheckboxData[categoryIndex].checkboxes[checkboxIndex].isChecked =
      !updatedCheckboxData[categoryIndex].checkboxes[checkboxIndex].isChecked;
    setCheckboxData(updatedCheckboxData);
  };

  return (
    <div className="w-full h-auto top-0 left-0 bg-[#f4f4f4] rounded-[10px] pt-5 px-5 pb-5 mb-8 border-solid border-[#f4f4f4] border-2 relative">
      {/* Title */}
      <div className="w-full h-auto top-0 left-0 mb-4 py-[5px] px-[10px] relative">
        <div className="flex items-center justify-between text-base-100">
          <FaRegDotCircle size="15px" className={'text-primary'} />
          <h2 className="w-[calc(100%-25px)] text-lg leading-7 relative text-primary">
            Trọng lượng
          </h2>
        </div>
      </div>

      {/* Checkbox */}
      <div className="w-auto h-auto top-0 left-0 relative p-1">
        <div className="flex w-full h-full flex-col flex-wrap">
          <div className="flex flex-col text-primary text-lg ">
            {checkboxData.map((category, categoryIndex) => (
              <React.Fragment key={category.categoryName}>
                <label className="mb-2 inline-block font-medium">
                  {category.categoryName}
                </label>
                {category.checkboxes.map((checkbox, checkboxIndex) => (
                  <label
                    key={checkbox.label}
                    className="mb-3 text-base-200 block relative"
                  >
                    <input
                      className="hidden"
                      type="checkbox"
                      checked={checkbox.isChecked}
                      onChange={() =>
                        handleCheckboxChange(categoryIndex, checkboxIndex)
                      }
                    />
                    <span
                      className={clsx(
                        'h-[25px] w-[25px] border border-solid border-[#ccc] inline-block mr-1',
                        checkbox.isChecked ? 'aftercheckbox' : '',
                      )}
                    ></span>
                    <span className="inline align-top">{checkbox.label}</span>
                  </label>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterWeight;
