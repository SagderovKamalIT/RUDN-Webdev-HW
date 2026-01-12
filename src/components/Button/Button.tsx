import styles from "./Button.module.scss";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  title?: string;

  size?: "small" | "large" | "xs" | "xss";
  variant?: "primary" | "secondary";
}

const Button = ({
  children,
  href,
  className,
  onClick,
  title,
  size = "large",
  variant = "primary",
}: ButtonProps) => {
  const Tag = href ? "a" : "button";

  const isXss = size === "xss";

  return (
    <Tag
      href={href}
      onClick={onClick}
      title={title}
      className={`
        ${styles.button}
        ${styles[size]}
        ${!isXss ? styles[variant] : ""} 
        ${className || ""}
      `}
    >
      {children}
    </Tag>
  );
};

export default Button;
