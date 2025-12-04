import { useState } from "react";
import styles from "./AssortmentSection.module.scss";
import Button from "../Button/Button";

interface OrderCounterProps {
  price: string;
}

const OrderCounter = ({ price }: OrderCounterProps) => {
  const [count, setCount] = useState(0);

  const numericPrice = parseInt(price.split(" ")[0], 10);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);

  

  return (
    <div className={styles.assortment__ButtonSection}>
      {count === 0 ? (
        <Button
          onClick={increment}
          size="small"
          variant="primary"
          className={`${styles.assortment__infoButton} ${styles.openModalFromCard}`}
        >
          Заказать
        </Button>
      ) : (
        <div className={styles.assortment__container}>
          <Button
            size="xs"
            variant="secondary"
            className={styles.assortment__containerCounter}
          >

            <div className={styles.assortment__containerCounter} >
            <Button size="xss" onClick={decrement}>
              −
            </Button>
            <span className={styles.assortment__containerValue}>{count}</span>
            <Button size="xss" onClick={increment}>
              +
            </Button>

            </div>
          </Button>

          <Button
            size="xs"
            variant="primary"
            className={styles.assortment__priceButton}
          >
            {numericPrice * count} ₽
          </Button>
        </div>
      )}
    </div>
  );
};

export default OrderCounter;
