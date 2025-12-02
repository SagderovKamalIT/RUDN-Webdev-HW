import styles from "./HeaderNav.module.scss";
import HeaderNavItem from "./HeaderNavItem/HeaderNavItem";
import type { HeaderNavItemProps } from "./HeaderNavItem/HeaderNavItem";

import addressIcon from "../../../assets/icons/address.svg";
import phoneIcon from "../../../assets/icons/phone.svg";


const navItems: HeaderNavItemProps[] = [
  {
    icon: addressIcon,
    text: <>г. Санкт Петербург, <br /> ул. Куйбышева 31</>,
    alt: "Иконка 'адрес'",
    href: "https://yandex.ru/maps/2/saint-petersburg/house/ulitsa_kuybysheva_31/Z0kYdQRjTEQGQFtjfXV0dnhqbA==/?ll=30.333511%2C59.957498&z=16",
    type: "address",
  },
  {
    icon: phoneIcon,
    text: "8 (812) 844-95-49",
    alt: "Иконка телефон",
    href: "tel:+78128449549",
    type: "tel",
    extraContent: <p className={styles.header__schedule}>Ежедневно с 9:00 до 20:00</p>,
  },
];

const HeaderNav = () => (
  <ul className={styles.header__list}>
    {navItems.map((item, index) => (
      <HeaderNavItem
        key={index}
        icon={item.icon}
        alt={item.alt}
        href={item.href}
        text={item.text}
        type={item.type}
        extraContent={item.extraContent}
      />
    ))}
  </ul>
);

export default HeaderNav;
