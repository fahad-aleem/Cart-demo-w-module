export const ActivityButton = props => {
  return (
    <svg
      width={80}
      height={80}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#prefix__filter0_d)">
        <rect x={20} y={16} width={40} height={40} rx={4} fill="#fff" />
        <path
          d="M48.889 36h-3.556l-2.666 8-5.334-16-2.666 8H31.11"
          stroke="#050505"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_d"
          x={0}
          y={0}
          width={80}
          height={80}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={10} />
          <feColorMatrix values="0 0 0 0 0.0196078 0 0 0 0 0.0196078 0 0 0 0 0.0196078 0 0 0 0.04 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};
