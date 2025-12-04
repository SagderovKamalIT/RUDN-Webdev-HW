import styles from "./Ttitle.module.scss";

interface TitleProps {
  children: React.ReactNode;
  size?: "xl" | "lg";
  tag?: "h1" | "h2";
}

const Title = ({ 
  children, 
  size = "xl", 
  tag = "h1"
}: TitleProps) => {

  const Tag = tag;

  return (
    <Tag className={`${styles.title} ${styles[size]}`}>
      {children}
    </Tag>
  );
};

export default Title;