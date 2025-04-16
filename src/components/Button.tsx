
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "default" | "forest" | "soft-teal" | "denim";
  size?: "default" | "sm" | "lg";
  children: React.ReactNode;
  to?: string;
  href?: string;
  className?: string;
  onClick?: () => void;
}

const Button = ({
  variant = "default",
  size = "default",
  children,
  to,
  href,
  className,
  onClick,
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center rounded font-poppins transition-colors duration-300 font-medium";
  
  const variantStyles = {
    default: "bg-deep-teal hover:bg-opacity-90 text-cream-beige",
    forest: "bg-forest-green hover:bg-opacity-90 text-cream-beige",
    "soft-teal": "bg-soft-teal hover:bg-opacity-90 text-cream-beige",
    denim: "bg-denim-blue hover:bg-opacity-90 text-cream-beige",
  };
  
  const sizeStyles = {
    sm: "py-1.5 px-3 text-sm",
    default: "py-2.5 px-5",
    lg: "py-3 px-7 text-lg",
  };
  
  const styles = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (to) {
    return (
      <Link to={to} className={styles}>
        {children}
      </Link>
    );
  }
  
  if (href) {
    return (
      <a href={href} className={styles} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  
  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
