import styles from "./Footer.module.scss";

interface FooterTextProps {
  children: React.ReactNode;
}

const FooterText = ({ children }: FooterTextProps) => (
  <p className={styles.footer__text}>{children}</p>
);

export default FooterText;