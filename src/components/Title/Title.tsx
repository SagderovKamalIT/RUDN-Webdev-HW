import styles from "./Ttitle.module.scss";

interface TitleProps {
  children: string;
  className?: string;
}

const Title = ({ children, className }: TitleProps) => {
  return <h2 className={`${styles.title} ${className || ""}`}>{children}</h2>;
};

export default Title;
