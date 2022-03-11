const RightArrow = ({ color, strokeWidth }) => {
  return (
    <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m2 1 8 8-8 8"
        stroke={color}
        stroke-width={strokeWidth}
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default RightArrow;
