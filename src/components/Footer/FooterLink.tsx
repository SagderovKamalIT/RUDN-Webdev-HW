import styles from "./Footer.module.scss";

interface FooterLinkProps {
  text: string;
  href: string;
}


const FooterLink = ({ text, href }: FooterLinkProps) => {
  return (

    <li className={styles.footer__item}>
      <a href={href} className={styles.footer__link}>
        {text}
      </a>
    </li>
  )
}

export default FooterLink;