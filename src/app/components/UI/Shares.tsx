import { FC } from 'react';
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';

interface ShareProps {}

const Shares: FC<ShareProps> = ({}) => {
  return (
    <>
      <div className="w-fit h-auto mr-4 font-medium">Share:</div>
      <ul className="flex items-center">
        <li>
          <FacebookShareButton url={'url'} className="mr-2">
            <FacebookIcon size={28} round={true} />
          </FacebookShareButton>
        </li>
        <li>
          <TwitterShareButton url={'url'} title={'title'}>
            <TwitterIcon size={28} round={true} />
          </TwitterShareButton>
        </li>
      </ul>
    </>
  );
};

export default Shares;
