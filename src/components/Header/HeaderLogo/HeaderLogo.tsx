import styles from "./HeaderLogo.module.scss";

const HeaderLogo = () => {
  return (
    <a
      href="#"
      className={styles.header__logo}
      rel="noopener noreferrer"
    >
      Сладкий сундук
    </a>
  );
};

export default HeaderLogo;
