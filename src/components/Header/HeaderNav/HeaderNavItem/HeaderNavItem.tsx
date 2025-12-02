import styles from "./HeaderNavItem.module.scss";

export interface HeaderNavItemProps {
  icon: string;
  alt: string;
  href: string;
  text: React.ReactNode;
  type: "address" | "tel";
  extraContent?: React.ReactNode;
}

const HeaderNavItem = (
  { icon,
     alt, 
     href, 
     text, 
     type, 
     extraContent }: HeaderNavItemProps) => {
  return (
    <li
      className={`${styles.header__item} ${
        type === "address"
          ? styles["header__item--address"]
          : styles["header__item--tel"]
      }`}
    >
      <img src={icon} alt={alt} />
      {type === "address" ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles["header__item--address-link"]}
        >
          {text}
        </a>
      ) : (
        <div className={styles["header__item--tel-container"]}>
          <a href={href} className={styles["header__item--tel-link"]}>
            {text}
          </a>
          {extraContent}
        </div>
      )}
    </li>
  );
};

export default HeaderNavItem;

