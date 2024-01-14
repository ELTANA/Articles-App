import { SVGProps } from 'react';

export default function ArticlesLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
      viewBox="0 0 24 24"
    >
      <rect width="10" height="10" fill="#fff" x="0" y="0"></rect>
      {/* <rect width="10" height="10" fill="#fff" x="14" y="0"></rect> */}
      {/* <rect width="10" height="10" fill="#fff" x="0" y="14"></rect> */}
      <rect width="10" height="10" fill="#fff" x="14" y="14"></rect>
    </svg>
  );
}
