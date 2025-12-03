import { useState } from "react";
import styles from "./AssortmentSection.module.scss";

interface OrderCounterProps {
  price: string;
}

const OrderCounter = ({ price }: OrderCounterProps) => {
  const [count, setCount] = useState(0);

  const numericPrice = parseInt(price.split(" ")[0], 10);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);

  return (
    <div className={styles.assortment__ButtonSection} >
      {count === 0 ? (
        <button
          className={`${styles.assortment__infoButton} ${styles.openModalFromCard}`}
          onClick={increment}
        >
          Заказать
        </button>
      ) : (
        <div className={styles.assortment__container}>
          <div className={styles.assortment__containerCounter} >

              <button className={styles.assortment__containerButton} onClick={decrement}>
                -
              </button>
              <span className={styles.assortment__containerValue}>{count}</span>
              <button className={styles.assortment__containerButton} onClick={increment}>
                +
              </button>
          </div>
          <span className={styles.assortment__infoButton}>{numericPrice * count} ₽</span>
        </div>
      )}
    </div>
  );
};

export default OrderCounter;
