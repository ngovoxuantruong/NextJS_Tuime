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
export default function Footer() {
  return (
    <div className="footer bg-gray-500  p-5">
      <div className="selectFooter container p-5">
        <div className="footerTop">
          <div className="listFooter 2xl:grid 2xl:grid-cols-4 xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1">
            <div className="introduce p-4">
              <h3 className="text-3xl text-white mb-5">Giới Thiệu</h3>
              <p className="text-white text-justify text-base mb-5">
                Sứ mệnh của TUMIE là phục vụ cho thú cưng của bạn luôn khỏe mạnh
                và đáng yêu, khiến cho khách hàng thật sự hài lòng với chất
                lượng sản phẩm và dịch vụ.
              </p>
              <ul className="listIcon flex justify-between p">
                <li>
                  <a href="#">
                    <TfiFacebook className="text-blue-400 bg-gray-500 text-5xl p-2 rounded-md hover:bg-white" />
                  </a>
                </li>

                <li>
                  <a href="">
                    <TfiTwitterAlt className="text-blue-400 bg-gray-500 text-5xl p-2 rounded-md hover:bg-white" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <TfiGoogle className="text-blue-400 bg-gray-500 text-5xl p-2 rounded-md hover:bg-white"></TfiGoogle>
                  </a>
                </li>
                <li>
                  <a href="">
                    <TfiYoutube className="text-blue-400 bg-gray-500 text-5xl p-2 rounded-md hover:bg-white" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <TfiPinterest className="text-blue-400 bg-gray-500 text-5xl p-2 rounded-md hover:bg-white" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="linkFooter p-4 text-white">
              <h3 className="text-3xl  mb-5">Liên Kết</h3>
              <ul className="listLink text-base">
                <li className="pb-3 mb-3 border-b-2 border-white border-dashed hover:text-black ">
                  <a href="">Giới thiệu</a>
                </li>
                <li className="pb-3 mb-3 border-b-2 border-white border-dashed hover:text-black">
                  <a href="">Sản phẩm</a>
                </li>
                <li className="pb-3 mb-3 border-b-2 border-white border-dashed hover:text-black">
                  <a href="">Dịch Vụ</a>
                </li>
                <li className="pb-3 mb-3 border-b-2 border-white border-dashed hover:text-black">
                  <a href="">Tin tức</a>
                </li>
                <li className="pb-3 mb-3 border-b-2 border-white border-dashed hover:text-black">
                  <a href="">Liên hệ</a>
                </li>
              </ul>
            </div>
            <div className="product p-4 text-white">
              <h3 className="text-3xl mb-5 ">Sản Phẩm</h3>
              <ul className="listProduct text-base">
                <li className="pb-3 mb-3 border-b-2 border-white border-dashed hover:text-black ">
                  <a href="">Tất cả</a>
                </li>
                <li className="pb-3 mb-3 border-b-2 border-white border-dashed hover:text-black ">
                  <a href="">Đồ cho chó</a>
                </li>
                <li className="pb-3 mb-3 border-b-2 border-white border-dashed hover:text-black ">
                  <a href="">Đồ cho mèo</a>
                </li>
                <li className="pb-3 mb-3 border-b-2 border-white border-dashed hover:text-black ">
                  <a href="">Chim cảnh</a>
                </li>
                <li className="pb-3 mb-3 border-b-2 border-white border-dashed hover:text-black ">
                  <a href="">Cá cảnh</a>
                </li>
              </ul>
            </div>
            <div className="contactInfo p-4 text-white">
              <h3 className="text-3xl mb-5 t">Thông Tin Liên Hệ</h3>
              <div className="address flex text-base justify-start items-center mb-5">
                <i className="mr-5">
                  <TfiMapAlt className="text-6xl p-2 rounded-xl text-blue-400 bg-white"></TfiMapAlt>
                </i>
                <p>
                  344 Huỳnh Tấn Phát, Phường Bình Thuận, Quận 7, TP.HCM, Việt
                  Nam
                </p>
              </div>
              <div className="phone flex items-center text-base justify-start mb-5">
                <i className="mr-5">
                  <SlPhone className="text-6xl  p-2 rounded-xl text-blue-400 bg-white"></SlPhone>
                </i>
                <p>1900 9477</p>
              </div>
              <div className="gmail flex items-center text-base justify-start mb-5">
                <i className="mr-5">
                  <TfiEmail className="text-6xl p-2 rounded-xl text-blue-400 bg-white"></TfiEmail>
                </i>
                <p>admin@demo037127.web30s.vn</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full footerBottom border-t-2 border-black bg-gray-500 items-center lg:flex lg:flex-row lg:justify-between md:flex-row sm:flex sm:justify-center sm:flex-col">
          <div className="footerBottomLeft flex lg:items-end lg:flex-row md:flex-row text-blue-300 text-base mt-2 sm:flex-col sm:items-center">
            <a className=" hover:text-white" href="">
              Sản phẩm của Nam Trường Hoài
            </a>
          </div>
          <div className="footerBottomRight flex justify-between ">
            <a href="">
              <img
                className="w-20 p-2"
                src="https://demo037127.web30s.vn/datafiles/34980/upload/images/banner/payment_4%20%281%29.jpg"
                alt=""
              />
            </a>
            <a href="">
              <img
                className="w-20 p-2"
                src="https://demo037127.web30s.vn/datafiles/34980/upload/images/banner/paymnet2.png?t=1684722123"
                alt=""
              />
            </a>

            <a href="">
              <img
                className="w-20 p-2"
                src="https://demo037127.web30s.vn/datafiles/34980/upload/images/banner/payment3.png?t=1684722123"
                alt=""
              />
            </a>

            <a href="">
              <img
                className="w-20 p-2"
                src="https://demo037127.web30s.vn/datafiles/34980/upload/images/banner/payment1.png?t=1684722123"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
