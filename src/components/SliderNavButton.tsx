import ChevronSmall from "../icons/ChevronSmall";
import { cn } from "../utils/helpers";

type Props = {
  leftNav?: boolean;
  disabled: boolean;
  onClick: Function;
};

const SliderNavButton = ({ leftNav = false, disabled, onClick }: Props) => {
  return (
    <button
      className={cn(
        "border border-gray-900 flex items-center justify-center rounded-full w-10 h-10 p-3",
        { "border-gray-400": disabled }
      )}
      onClick={() => onClick()}
      aria-disabled={disabled}
      aria-label={leftNav ? "Previous car" : "Next car"}
    >
      <ChevronSmall
        className={cn(
          "pl-1",
          { "rotate-180": leftNav },
          { "stroke-gray-400": disabled }
        )}
      />
    </button>
  );
};

export default SliderNavButton;
