import classNames from "classnames";
import "@styles/components/ui/Button.scss";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outlined";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  fullWidth = false,
  className = "",
  children,
  ...props
}) => {
  const buttonClass = classNames(
    "button",
    variant,
    size,
    {
      "full-width": fullWidth,
    },
    className
  );

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
