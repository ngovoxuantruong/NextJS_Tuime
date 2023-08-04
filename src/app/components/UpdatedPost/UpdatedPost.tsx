import React from 'react';
import Title from '../Title';
import Image from 'next/image';
import picturePost from '../../../../public/tt7.jpeg';
import Link from 'next/link';
import { TbCalendarCheck, TbUsersGroup } from 'react-icons/tb';
import Post from './ItemPost';
import ItemPost from './ItemPost';

export interface Posts {
  id: number;
  picture: string;
  amoutMember: number;
  title: string;
  dateTime: string;
  status: boolean;
}

const listPost: Posts[] = [
  {
    id: 1,
    picture: '',
    amoutMember: 169,
    title: '5 điều bạn nên làm cho chú chó của mình',
    dateTime: '22/05/2023',
    status: true,
  },
  {
    id: 2,
    picture: '',
    amoutMember: 169,
    title: '4 điều bạn nên làm cho chú chó của mình',
    dateTime: '22/05/2023',
    status: false,
  },
  {
    id: 3,
    picture: '',
    amoutMember: 169,
    title: '3 điều bạn nên làm cho chú chó của mình',
    dateTime: '22/05/2023',
    status: true,
  },
  {
    id: 4,
    picture: '',
    amoutMember: 169,
    title: '2 điều bạn nên làm cho chú chó của mình',
    dateTime: '22/05/2023',
    status: true,
  },
];

const UpdatedPost = () => {
  return (
    <div className="updatedPost pt-[50px] pb-[50px]">
      <div className="container">
        <div className="selectUpdatePost">
          <div className="updatePostTop">
            <Title text="Chất Lượng Tốt Nhất" h2="Bài vết cập nhật"></Title>
          </div>
          <div className="updatePostBottom">
            <div className="selectUpdatePostBottom">
              <div className="listPost grid grid-cols-3 gap-5">
                {listPost.map(
                  (post) =>
                    post.status === true && (
                      <ItemPost key={post.id} post={post}></ItemPost>
                    ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatedPost;
