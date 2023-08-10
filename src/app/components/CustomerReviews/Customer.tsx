import React, { FC } from 'react';
import pictureClient from '../../../../public/review/x2.jpg';
import { SiMonoprix } from 'react-icons/si';
import Image from 'next/image';
import { CustomerReviews } from './CustomerReviews';

interface Customer {
  customer: CustomerReviews;
}

const Customer: FC<Customer> = ({ customer }) => {
  return (
    <article className="itemReview p-[30px] bg-white rounded-2xl shadow-2xl flex justify-between flex-col">
      <div className="customer flex justify-start mb-5">
        <div className="customerImg overflow-hidden rounded-full border-2">
          <Image
            className=" hover:scale-110 ease-in-out transition duration-300"
            width={100}
            alt=""
            src={pictureClient}
          ></Image>
        </div>
        <div className="nameCustomer pl-5">
          <p>{customer.name}</p>
        </div>
      </div>
      <div className="review mb-[10px] text-base text-justify">
        <p>{customer.comment}</p>
      </div>
      <div className="iconReview flex justify-end">
        <div></div>
        <SiMonoprix className="text-6xl text-primary"></SiMonoprix>
      </div>
    </article>
  );
};

export default Customer;
