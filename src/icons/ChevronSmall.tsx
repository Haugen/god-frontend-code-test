import clsx from "clsx";

const ChevronSmall = ({
  width = 20,
  height = 40,
  stroke = "stroke-gray-900",
  className = "inline",
}: {
  width?: number;
  height?: number;
  stroke?: string;
  className?: string;
}) => {
  return (
    <svg
      className={clsx(stroke, className)}
      width={width}
      height={height}
      viewBox="1.239 0.739 5.527 9.524"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 1.5l4 4-4 4"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export default ChevronSmall;
