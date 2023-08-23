import Link from 'next/link';
import { FC } from 'react';

type tagsInfo = {
  label: string;
  slug: string;
};

interface TagsProps {
  tags: tagsInfo[];
}

const Tags: FC<TagsProps> = ({ tags }) => {
  return (
    <>
      <div className="w-fit h-auto mr-4 font-medium">Tags:</div>
      {tags &&
        tags.map(({ label, slug }, index) => (
          <div key={index} className="bg-base-100 opacity-95">
            <Link href={slug} className="tag">
              {label}
            </Link>
          </div>
        ))}
    </>
  );
};

export default Tags;
