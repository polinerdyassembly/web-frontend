import Link from "next/link";
import { twMerge } from "tailwind-merge";

import { antonio } from "@/utils/fonts";

export interface NavItemProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function NavItem({
  href,
  children,
  className = undefined,
}: NavItemProps) {
  return (
    <Link
      className={twMerge(
        "text-4xl text-red-700 transition-transform hover:-translate-y-1 hover:underline",
        antonio.className,
        className,
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
