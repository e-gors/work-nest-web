import React from "react";

type ButtonVariant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";

type ButtonSize = "default" | "sm" | "lg" | "icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

function CustomButton({
  className = "",
  variant = "default",
  size = "default",
  type = "button",
  disabled = false,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50";

  const variantStyles: Record<ButtonVariant, string> = {
    default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",

    destructive:
      "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",

    outline:
      "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",

    secondary:
      "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",

    ghost: "hover:bg-accent hover:text-accent-foreground",

    link: "text-primary underline-offset-4 hover:underline",
  };

  const sizeStyles: Record<ButtonSize, string> = {
    default: "h-9 px-4 py-2",
    sm: "h-8 rounded-md px-3 text-xs",
    lg: "h-10 rounded-md px-8",
    icon: "h-9 w-9",
  };

  const buttonClassName = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      disabled={disabled}
      className={buttonClassName}
      {...props}
    >
      {children}
    </button>
  );
}

export default CustomButton;
