import Title from "../Title/Title";
import styles from "./OrdersSection.module.scss";
import OrdersTable from "./OrderTable";

const OrdersSection = () => {
  return (
    <section className={styles.orders}>
      <div className={styles.orders__text}>
        <Title>Сделали более 3.000 заказов за 2 года</Title>

        <p>Посмотрите фото реальных заказов из нашего instagram</p>
      </div>

      
      <OrdersTable />
    </section>
  );
};

export default OrdersSection;
