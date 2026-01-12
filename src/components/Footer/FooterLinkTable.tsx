import styles from "./Footer.module.scss";
import FooterLink from "./FooterLink";
import type { FooterLinkData } from "./FooterData";

interface FooterLinksTableProps {
  links: FooterLinkData[];
}

const FooterLinksTable = ({ links }: FooterLinksTableProps) => {
  return (
    <ul className={styles.footer__list}>
      {links.map(link => (
        <FooterLink key={link.href} text={link.text} href={link.href} />
      ))}
    </ul>
  );
};

export default FooterLinksTable;