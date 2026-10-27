import React from "react";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

function Label({ className = "", children, ...props }: LabelProps) {
  const labelStyles = [
    "text-sm font-medium leading-none",
    "peer-disabled:cursor-not-allowed",
    "peer-disabled:opacity-70",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <label className={labelStyles} {...props}>
      {children}
    </label>
  );
}

export default Label;
