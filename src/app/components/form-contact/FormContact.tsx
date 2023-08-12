import React, { useState } from 'react';
import Capcha from '@/app/components/capcha/Capcha';
import { Button } from '@/app/components/ui/Button';
import { BsSendFill } from 'react-icons/bs';
import { TbRefresh } from 'react-icons/tb';
interface FormData {
  name: string;
  email: string;
  phone: number;
  address: string;
  content: string;
}

interface FormError {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  content?: string;
  notification?: string;
}
const FormContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    content: '',
  });
  const [error, setError] = useState<FormError>({});
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: FormError = {};
    if (formData.name) {
      newErrors.name = 'Tên không được để trống';
    }
    if (formData.address) {
      newErrors.address = 'Địa chỉ không được để trống';
    }
    if (formData.content) {
      newErrors.content = 'Nội dung không được để trống';
    }
    if (formData.phone) {
      newErrors.phone = 'Số điện thoại không được để trống';
    }
    if (formData.email) {
      newErrors.email = 'email không được để trống';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'email không hợp lệ';
    }
    if (Object.keys.length === 0) {
      newErrors.notification = 'Form không để trống';
    }
    setError(newErrors);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <div className="mt-2 relative">
                <p className="absolute top-3 left-2 text-red-600">*</p>
                <input
                  value={formData.name}
                  onChange={handleOnChange}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Họ và tên"
                  className="pt-[10px] pb-[10px] pl-[20px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {error.name && <span className="text-error">{error.name}</span>}
              </div>
            </div>
            <div className="sm:col-span-3">
              <div className="mt-2 relative">
                <p className="absolute top-3 left-2 text-red-600">*</p>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Email"
                  className=" pt-[10px] pb-[10px] pl-[20px] block w-full rounded-md  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {error.email && (
                  <span className="text-error">{error.email}</span>
                )}
              </div>
            </div>
            <div className="sm:col-span-3">
              <div className="mt-2 relative">
                <p className="absolute top-3 left-2 text-red-600">*</p>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Số điện thoại"
                  className=" pt-[10px] pb-[10px] pl-[20px] block w-full rounded-md  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {error.phone && (
                  <span className="text-error">{error.phone}</span>
                )}
              </div>
            </div>
            <div className="sm:col-span-3">
              <div className="mt-2 relative">
                <p className="absolute top-3 left-2 text-red-600">*</p>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Địa chỉ"
                  className=" pt-[10px] pb-[10px] pl-[20px] block w-full rounded-md  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {error.address && (
                  <span className="text-error">{error.address}</span>
                )}
              </div>
            </div>
            <div className="col-span-full">
              <div className="mt-2 relative">
                <p className="absolute top-3 left-2 text-red-600">*</p>
                <textarea
                  id="content"
                  name="content"
                  rows={3}
                  placeholder="Nội dung"
                  className=" pt-[10px] pb-[10px] pl-[20px] block w-full rounded-md  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
                {error.content && (
                  <span className="text-error">{error.content}</span>
                )}
              </div>
              <Capcha></Capcha>
              <div className="btnContact grid grid-cols-4 gap-2">
                <Button className="group !rounded-xl mt-4">
                  <BsSendFill className="text-base text-primary group-hover:text-white "></BsSendFill>{' '}
                  Gửi đi
                </Button>
                <Button
                  onClick={() =>
                    setFormData({
                      name: '',
                      email: '',
                      content: '',
                      phone: '',
                      address: '',
                    })
                  }
                  className="!rounded-xl mt-4 !bg-gray-600 hover:!bg-gray-500 text-white"
                >
                  <TbRefresh className="text-base "></TbRefresh>
                  Làm lại
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormContact;
