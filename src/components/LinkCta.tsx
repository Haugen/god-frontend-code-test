import Link from "next/link";
import { PropsWithChildren } from "react";

import ChevronSmall from "../icons/ChevronSmall";

type Props = {
  href: string;
  ariaLabel: string;
};

const LinkCta = ({ href, ariaLabel, children }: PropsWithChildren<Props>) => {
  return (
    <Link
      className="uppercase flex items-center group text-primary hover:text-gray-900 text-sm font-semibold"
      href={href}
      aria-label={ariaLabel}
    >
      {children}{" "}
      <ChevronSmall
        className="ml-2 inline group-hover:stroke-gray-900"
        stroke="stroke-primary"
        width={6}
        height={12}
      />
    </Link>
  );
};

export default LinkCta;
