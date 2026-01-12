import styles from "./Footer.module.scss";
import FooterLinksTable from "./FooterLinkTable";
import { footerLinks } from "./FooterData";
import FooterText from "./FooterText";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="wrap">
        <div className={styles.footer__container}>
          <FooterLinksTable links={footerLinks} />


          <FooterText>
            © nazvaniesaita.ru, 2054 | Название компании или ИП ОГРН 0000000000000
          </FooterText>
        </div>
      </div>
    </div>
  );
};

export default Footer;
