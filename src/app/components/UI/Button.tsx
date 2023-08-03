import Link from 'next/link';
import { FC } from 'react';

interface ButtonProps {
  label: string;
  className?: any;
}

const Button: FC<ButtonProps> = ({ label, className }) => {
  return (
    <Link href="#!" className="z-10">
      <button
        className={`btn btn-active btn-secondary text-base-200 rounded-2xl px-8 hover:bg-primary hover:border-primary hover:text-base-100 ${className}`}
      >
        {label}
      </button>
    </Link>
  );
};

export default Button;
