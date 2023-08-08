import Title from '@/app/components/UI/Title';
import React, { FC } from 'react';
import Image from 'next/image';
import InforMember from './InforMember';

export interface TeamWorkProp {
  id: number;
  picture: string;
  name: string;
  work: string;
}

const TeamWorkMembers: TeamWorkProp[] = [
  {
    id: 1,
    picture: '../../../../public/get-image-v4.png',
    name: 'Harley Hemsworth',
    work: 'Bác sĩ thú y',
  },
  {
    id: 2,
    picture: '../../../../public/get-image-v4.png',
    name: 'Harley Hemsworth',
    work: 'Bác sĩ thú y',
  },
  {
    id: 3,
    picture: '../../../../public/get-image-v4.png',
    name: 'Miley Kenny',
    work: 'Bác sĩ thú y',
  },
  {
    id: 4,
    picture: '../../../../public/get-image-v4.png',
    name: 'Jhon Anderson',
    work: 'Bác sĩ thú y',
  },
];

export const TeamWorks = () => {
  return (
    <div className="teamWork pb-[50px] pt-[50px]">
      <Title label="ĐỘI NGŨ" h2="Nhân viên chuyên nghiệp"></Title>
      <div className="container">
        <div className="listMember">
          <div className="selectListMember">
            <div className="member flex justify-between items-center">
              {TeamWorkMembers.map((teamWorkMember) => (
                <InforMember
                  key={teamWorkMember.id}
                  teamWorkMember={teamWorkMember}
                ></InforMember>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
