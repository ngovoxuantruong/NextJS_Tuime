import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { TbCalendarCheck, TbUsersGroup } from 'react-icons/tb';
import picturePost from '../../../../public/tt7.jpeg';
import { Posts } from './UpdatedPost';
import { Button } from '../UI/Button';

interface PostProp {
  post: Posts;
}

const ItemPost: FC<PostProp> = ({ post }) => {
  return (
    <div>
      <div className="Post p-[15px] pb-[25px] rounded-lg border-gray-400 border-2 ">
        <div className="selectPost">
          <div className="picturePost mb-5 overflow-hidden">
            <Link href="">
              <Image
                className="hover:scale-110 ease-in-out transition duration-300"
                src={picturePost}
                width={400}
                alt=""
              ></Image>
            </Link>
          </div>
          <div className="timeAndPeople flex justify-center items-center text-primary text-base font-semibold mb-[15px]">
            <div className="time flex justify-center items-center mr-2">
              <div className="icontime">
                <TbCalendarCheck></TbCalendarCheck>
              </div>
              <p>{post.dateTime}</p>
            </div>
            <div className="people flex justify-start items-center ml-2">
              <div className="iconPeople">
                <TbUsersGroup></TbUsersGroup>
              </div>
              <p>{post.amoutMember}</p>
            </div>
          </div>
          <div className="titleUP mb-[15px]">
            <div className="h2 text-[22px] text-center mb-[15px]">
              <Link href="">{post.title}</Link>
            </div>
            <div className="button  text-center">
              <Button
                variant={'secondary'}
                className="hover:btn-primary hover:text-base-100"
              >
                Tìm hiểu thêm
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPost;
