const LeftArrow = ({ color, strokeWidth }) => {
  return (
    <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11 1 3 9l8 8"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default LeftArrow
