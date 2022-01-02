export const ActivityIcon: React.FC = props => {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.889 10h-3.556l-2.666 8L7.333 2l-2.666 8H1.11"
        stroke="#050505"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
