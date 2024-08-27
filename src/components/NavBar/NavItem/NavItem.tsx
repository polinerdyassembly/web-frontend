import { Antonio } from "next/font/google";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

const antonio = Antonio({ subsets: ["latin"] });

export default function NavItem({ href, children }: NavItemProps) {
  return (
    <Link
      className={twMerge(
        "text-4xl text-red-700 transition-transform hover:-translate-y-1 hover:underline",
        antonio.className,
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
