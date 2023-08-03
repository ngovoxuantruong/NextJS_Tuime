import { FC } from 'react';

interface TitleProps {
  label: string;
  h2: string;
}

const Title: FC<TitleProps> = ({ label, h2 }) => {
  return (
    <div className="w-full h-auto top-0 left-0 bg-[url('/sec.png')] bg-no-repeat bg-center bg-contain mb-8 relative">
      <div className="w-full h-auto top-0 left-0 text-primary text-lg font-light mb-2 tracking-wide relative uppercase text-center">
        {label}
      </div>
      <h2 className="w-full h-auto text-base-200 text-4xl top-0 left-0 relative text-center font-semibold">
        {h2}
      </h2>
    </div>
  );
};

export default Title;
