import styles from "./AssortmentSection.module.scss";
import Title from "../Title/Title";
import AssortmentTable from "./AssortmentTable";

const AssortmentSection = () => {
  return (
    <section id="assortment" className={styles.assortment}>
      <div className={`${styles.assortment__section} wrap`}>
  

        <Title size="lg" tag="h2">
          Для любых событий и дорогих вам людей
        </Title>

        <AssortmentTable />
      </div>
    </section>
  );
};

export default AssortmentSection;
