import styles from "../AssortmentSection/AssortmentSection.module.scss";
import OrderCounter from "./OrderCounter";

interface AssortmentCardProps {
   id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

const AssortmentCard = ({ id, name, description, price, image }: AssortmentCardProps) => {
  return (
    <article className={styles.assortment__card} key={id}>
      <img src={image} alt={name} className={styles.assortment__image} />
      <div className={styles.assortment__info}>
        <div className={styles.assortment__infoContainer}>
          <h3 className={styles.assortment__infoName}>{name}</h3>
          <p className={styles.assortment__infoDescription}>{description}</p>
        </div>
        <div className={styles.assortment__infoCost}>
          <span className={styles.assortment__infoPrice}>{price}</span>
         

          <OrderCounter price={price} />
        </div>
      </div>
    </article>
  );
};

export default AssortmentCard;