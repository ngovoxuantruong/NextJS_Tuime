import React, { FC, useState } from 'react';
import { FacebookProvider, Comments } from 'react-facebook';

interface FacebookCommentProps {
  url: string;
}

const FacebookComment: FC<FacebookCommentProps> = ({ url }) => {
  return (
    <div>
      <FacebookProvider appId="YOUR_APP_ID">
        <Comments href={url} width="100%" />
      </FacebookProvider>
    </div>
  );
};

export default FacebookComment;
