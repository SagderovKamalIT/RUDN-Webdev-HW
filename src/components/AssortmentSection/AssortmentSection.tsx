import styles from "./AssortmentSection.module.scss"
import Title from "../Title/Title";
import AssortmentTable from "./AssortmentTable";


const AssortmentSection = () => {

  return (
    <section className={styles.assortment}>
  <div className="wrap">

    <Title className={styles.assortment__title}>Для любых событий и дорогих вам людей</Title>

    <AssortmentTable />



  </div>
</section>

  )

}

export default AssortmentSection;