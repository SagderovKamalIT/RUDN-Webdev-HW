import type { OrderItem } from "./OrdersData";
import styles from "./OrdersSection.module.scss";

interface OrderItemCardProps {
  item: OrderItem;
}

const OrderItemCard = ({item}: OrderItemCardProps) => {
  return (
    <li className={styles.orders__listItem}>
      <img src={item.src} alt={item.alt} className={styles.orders__image} />
    </li>
  );
};

export default OrderItemCard;