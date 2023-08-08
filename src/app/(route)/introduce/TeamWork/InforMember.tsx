import Image from 'next/image';
import React, { FC } from 'react';
import { TeamWorkProp } from './TeamWorks';
import member from '../../../../../public/team-work/doctor3.jpg';
interface InforTeamWork {
  teamWorkMember: TeamWorkProp;
}

const InforMember: FC<InforTeamWork> = ({ teamWorkMember }) => {
  return (
    <article>
      <div className="imgMember overflow-hidden">
        <Image
          width={250}
          src={member}
          alt=""
          className="hover:scale-110 ease-in-out transition duration-300"
        ></Image>
      </div>
      <div className="inforMember text-center pt-[10px] pb-[10px] pl-[15px] pr-[15]">
        <div className="nameMember mb-[5px]">
          <h3 className="text-xl font-medium">{teamWorkMember.name}</h3>
        </div>
        <div className="workMember text-base font-normal">
          {teamWorkMember.work}
        </div>
      </div>
    </article>
  );
};

export default InforMember;
