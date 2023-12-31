import React from 'react';
import { TbMapPin, TbPhonePause, TbMailOpened } from 'react-icons/tb';
import { MapConponent } from '@/app/components/map-component/MapConponent';
import FormContact from '@/app/components/form-contact/FormContact';
import Breadcrumb from '@/app/components/ui/Breadcrumb';
import Title from '@/app/components/ui/Title';

const page = () => {
  return (
    <section className="contact">
      <Breadcrumb breadcrumbTitle={[{ title: 'Liên hệ', src: '#!' }]} />
      <div className="selectContainer pt-[50px] pb-[50px]">
        <div className="container">
          <Title h2="Thông tin liên hệ" label="SẢN PHẨM THÚ CƯNG"></Title>
          <div className="form grid grid-cols-2 gap-4">
            <div className="formLeft ">
              <div className="formItem mb-5 m-5 flex justify-start items-center border-2 border-solid rounded-2xl p-5">
                <div className="iconContact bg-primary rounded-full border-5 p-3 mr-4">
                  <TbMapPin className="text-3xl text-white"></TbMapPin>
                </div>
                <div>
                  <p className="text-xl font-medium">Địa Chỉ</p>
                  <p className="text-base">
                    344 Huỳnh Tấn Phát, Phường Bình Thuận, Quận 7, TP.HCM, Hồ
                    Chí Minh
                  </p>
                </div>
              </div>
              <div className="formItem mb-5 m-5 flex justify-start items-center border-2 border-solid rounded-2xl p-5">
                <div className="iconContact bg-primary rounded-full border-5 p-3 mr-4">
                  <TbPhonePause className="text-3xl text-white"></TbPhonePause>
                </div>
                <div>
                  <p className="text-xl font-medium">Số điện thoại</p>
                  <p className="text-base">0376681557</p>
                </div>
              </div>
              <div className="formItem mb-5 m-5 flex justify-start items-center border-2 border-solid rounded-2xl p-5">
                <div className="iconContact bg-primary rounded-full border-5 p-3 mr-4">
                  <TbMailOpened className="text-3xl text-white"></TbMailOpened>
                </div>
                <div>
                  <p className="text-xl font-medium">Email:</p>
                  <p className="text-base">nguyennhuhoai745@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="formRight">
              <FormContact></FormContact>
            </div>
          </div>
        </div>
        <MapConponent></MapConponent>
      </div>
    </section>
  );
};

export default page;
