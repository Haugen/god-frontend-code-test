import clsx from "clsx";

import ChevronSmall from "../icons/ChevronSmall";

type Props = {
  leftNav?: boolean;
  onClick: Function;
};

const SliderNavButton = ({ leftNav = false, onClick }: Props) => {
  return (
    <button
      className="border border-gray-900 flex items-center justify-center rounded-full w-10 h-10 p-3"
      onClick={() => onClick()}
      aria-label={leftNav ? "Previous car" : "Next car"}
    >
      <ChevronSmall className={clsx("pl-1", { "rotate-180": leftNav })} />
    </button>
  );
};

export default SliderNavButton;
