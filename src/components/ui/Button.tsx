import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "dark";
type ButtonSize = "default" | "lg";

interface ButtonProps {
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#357574] text-white hover:bg-[#0A3660] rounded-xl",
  secondary:
    "border-2 border-[#357574] text-[#357574] hover:bg-[#E6F0F0] rounded-xl",
  dark:
    "bg-[#061D37] text-white hover:bg-[#0A3660] rounded-xl",
};

const sizeStyles: Record<ButtonSize, string> = {
  default: "px-6 py-3 text-[15px]",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  href,
  variant = "primary",
  size = "default",
  children,
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center font-sans font-bold min-h-[44px] transition",
    variantStyles[variant],
    sizeStyles[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
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
