import styles from "./AssortmentSection.module.scss"
import AssortmentCard from "./AssortmentCard";
import { assortmentData } from "./AssortmentData";
import Title from "../Title/Title";


const AssortmentSection = () => {

  return (
    <section className={styles.assortment}>
  <div className="wrap">

    <Title className={styles.assortment__title}>Для любых событий и дорогих вам людей</Title>

  

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

      

  </div>
</section>

  )

}

export default AssortmentSection;