import React from 'react';
import {
  TfiFacebook,
  TfiTwitterAlt,
  TfiGoogle,
  TfiYoutube,
  TfiPinterest,
  TfiMapAlt,
  TfiEmail,
} from 'react-icons/tfi';
import { SlPhone } from 'react-icons/sl';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="footer bg-neutral p-5">
      <div className="selectFooter container max-w-[1200px] p-5">
        <div className="footerTop">
          <div className="listFooter 2xl:grid 2xl:grid-cols-4 xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1">
            <div className="introduce p-4">
              <h3 className="text-xl text-white mb-5">Giới Thiệu</h3>
              <p className="text-white text-justify  mb-5 text-sm">
                Sứ mệnh của TUMIE là phục vụ cho thú cưng của bạn luôn khỏe mạnh
                và đáng yêu, khiến cho khách hàng thật sự hài lòng với chất
                lượng sản phẩm và dịch vụ.
              </p>
              <ul className="listIcon flex justify-between p">
                <li>
                  <Link href="#">
                    <TfiFacebook className="text-primary bg-base-100 text-4xl p-2 rounded-md hover:bg-secondary" />
                  </Link>
                </li>

                <li>
                  <Link href="">
                    <TfiTwitterAlt className="text-primary bg-base-100 text-4xl p-2 rounded-md hover:bg-secondary" />
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <TfiGoogle className="text-primary bg-base-100 text-4xl p-2 rounded-md hover:bg-secondary"></TfiGoogle>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <TfiYoutube className="text-primary bg-base-100 text-4xl p-2 rounded-md hover:bg-secondary" />
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <TfiPinterest className="text-primary bg-base-100 text-4xl p-2 rounded-md hover:bg-secondary" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="linkFooter p-4 text-white">
              <h3 className="text-xl  mb-5">Liên Kết</h3>
              <ul className="listLink text-sm">
                <li className="pb-3 mb-3 border-b-[1px] border-gray-400 border-dashed hover:text-secondary ">
                  <Link href="">Giới thiệu</Link>
                </li>
                <li className="pb-3 mb-3 border-b-[1px] border-gray-400 border-dashed hover:text-secondary">
                  <Link href="">Sản phẩm</Link>
                </li>
                <li className="pb-3 mb-3 border-b-[1px] border-gray-400 border-dashed hover:text-secondary">
                  <Link href="">Dịch Vụ</Link>
                </li>
                <li className="pb-3 mb-3 border-b-[1px] border-gray-400 border-dashed hover:text-secondary">
                  <Link href="">Tin tức</Link>
                </li>
                <li className="pb-3 mb-3 border-b-[1px] border-gray-400 border-dashed hover:text-secondary">
                  <Link href="">Liên hệ</Link>
                </li>
              </ul>
            </div>
            <div className="product p-4 text-white">
              <h3 className="text-xl mb-5 ">Sản Phẩm</h3>
              <ul className="listProduct text-sm">
                <li className="pb-3 mb-3 border-b-[1px] border-gray-400 border-dashed hover:text-secondary ">
                  <Link href="">Tất cả</Link>
                </li>
                <li className="pb-3 mb-3 border-b-[1px] border-gray-400 border-dashed hover:text-secondary ">
                  <Link href="">Đồ cho chó</Link>
                </li>
                <li className="pb-3 mb-3 border-b-[1px] border-gray-400 border-dashed hover:text-secondary ">
                  <Link href="">Đồ cho mèo</Link>
                </li>
                <li className="pb-3 mb-3 border-b-[1px] border-gray-400 border-dashed hover:text-secondary ">
                  <Link href="">Chim cảnh</Link>
                </li>
                <li className="pb-3 mb-3 border-b-[1px] border-gray-400 border-dashed hover:text-secondary ">
                  <Link href="">Cá cảnh</Link>
                </li>
              </ul>
            </div>
            <div className="contactInfo p-4 text-white">
              <h3 className="text-xl mb-5 t">Thông Tin Liên Hệ</h3>
              <div className="address flex text-base justify-start items-center mb-5">
                <i className="mr-5">
                  <TfiMapAlt className="text-4xl p-2 rounded-xl text-primary bg-secondary"></TfiMapAlt>
                </i>
                <p className="text-sm">
                  344 Huỳnh Tấn Phát, Phường Bình Thuận, Quận 7, TP.HCM, Việt
                  Nam
                </p>
              </div>
              <div className="phone flex items-center text-base justify-start mb-5">
                <i className="mr-5">
                  <SlPhone className="text-4xl  p-2 rounded-xl text-primary bg-secondary"></SlPhone>
                </i>
                <p className="text-sm">1900 9477</p>
              </div>
              <div className="gmail flex items-center text-base justify-start mb-5">
                <i className="mr-5">
                  <TfiEmail className="text-4xl p-2 rounded-xl text-primary bg-secondary"></TfiEmail>
                </i>
                <p className="text-sm">admin@demo037127.web30s.vn</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full footerBottom border-t-[1px] border-gray-400 items-center lg:flex lg:flex-row lg:justify-between md:flex-row sm:flex sm:justify-center sm:flex-col">
          <div className="footerBottomLeft flex lg:items-end lg:flex-row md:flex-row text-gray-300 text-base mt-2 sm:flex-col sm:items-center">
            <Link className=" hover:text-secondary text-sm" href="">
              Sản phẩm của Nam Trường Hoài
            </Link>
          </div>
          <div className="footerBottomRight flex justify-between ">
            <Link href="">
              <img
                className="w-16 p-2"
                src="https://demo037127.web30s.vn/datafiles/34980/upload/images/banner/payment_4%20%281%29.jpg"
                alt=""
              />
            </Link>
            <Link href="">
              <img
                className="w-16 p-2"
                src="https://demo037127.web30s.vn/datafiles/34980/upload/images/banner/paymnet2.png?t=1684722123"
                alt=""
              />
            </Link>

            <Link href="">
              <img
                className="w-16 p-2"
                src="https://demo037127.web30s.vn/datafiles/34980/upload/images/banner/payment3.png?t=1684722123"
                alt=""
              />
            </Link>

            <Link href="">
              <img
                className="w-16 p-2"
                src="https://demo037127.web30s.vn/datafiles/34980/upload/images/banner/payment1.png?t=1684722123"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
