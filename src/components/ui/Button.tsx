import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "large";
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  href,
  className = "",
  children,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-default font-semibold text-xs tracking-wider uppercase transition-all duration-300 active:scale-95";
  
  const variants = {
    primary: "bg-primary text-on-primary px-6 py-2.5 hover:bg-primary-container shadow-sm hover:shadow-md",
    secondary: "bg-secondary text-on-secondary px-6 py-2.5 hover:bg-secondary/90 shadow-sm hover:shadow-md",
    outline: "border border-outline text-primary hover:bg-primary/5 px-6 py-2.5",
    large: "bg-primary text-on-primary px-12 py-4 text-sm shadow-lg hover:shadow-2xl hover:-translate-y-1",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
