import clsx from "clsx";

import ChevronSmall from "../icons/ChevronSmall";

type Props = {
  leftNav?: boolean;
  disabled: boolean;
  onClick: Function;
};

const SliderNavButton = ({ leftNav = false, disabled, onClick }: Props) => {
  return (
    <button
      className={clsx(
        "border border-gray-900 flex items-center justify-center rounded-full w-10 h-10 p-3",
        { "border-gray-400": disabled }
      )}
      onClick={() => onClick()}
      aria-disabled={disabled}
      aria-label={leftNav ? "Previous car" : "Next car"}
    >
      <ChevronSmall
        className={clsx(
          "pl-1",
          { "rotate-180": leftNav },
          { "stroke-gray-400": disabled }
        )}
      />
    </button>
  );
};

export default SliderNavButton;
