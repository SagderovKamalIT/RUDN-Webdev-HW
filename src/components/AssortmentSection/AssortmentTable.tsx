import styles from "./AssortmentSection.module.scss";
import AssortmentCard from "./AssortmentCard";
import { assortmentData } from "./AssortmentData";

const AssortmentTable = () => {
  return (
    <div className={styles.assortment__list}>
      {assortmentData.map(item => (
        <AssortmentCard
          key={item.id}
          id={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default AssortmentTable;