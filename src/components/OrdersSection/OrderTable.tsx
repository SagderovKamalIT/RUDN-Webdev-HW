import styles from "./OrdersSection.module.scss";
import OrderItemCard from "./OrderItemCard";
import { ordersData } from "./OrdersData";

const OrdersTable = () => {
  return (
    <ul className={styles.orders__list} role="list">
      {ordersData.map(item => (
        <OrderItemCard key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default OrdersTable;