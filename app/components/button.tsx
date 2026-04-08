import Link from "next/link";
import { type ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "filled" | "outline";
  size?: "default" | "lg";
  type?: "button" | "submit";
  className?: string;
  onClick?: () => void;
};

const base =
  "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-text focus:ring-offset-2 focus:ring-offset-bg";

const variants = {
  filled: "bg-text text-bg hover:opacity-80",
  outline: "border border-border text-text hover:border-text",
};

const sizes = {
  default: "rounded-full px-6 py-2.5 text-sm",
  lg: "rounded-full px-8 py-3.5 text-[15px]",
};

export function Button({
  children,
  href,
  variant = "filled",
  size = "default",
  type = "button",
  className = "",
  onClick,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (href.startsWith("#")) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
