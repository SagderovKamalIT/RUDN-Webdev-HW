import styles from "./AboutSection.module.scss";

const AboutSection = () => {
  return (

    <>

    <div className={styles.about} >

    <div className="wrap">

          
                <div className={styles.about__container}>
          
                <div className={styles.about__info}>
                <span className={styles.about__infoSpan}>ВКУСНЕЙШИЕ</span>
                
                <h1 className={styles.about__infoTitle}>
                  Пирожные и капкейки от 150 ₽/шт. с доставкой по Санкт-Петербургу
                </h1>
          
                <p className={styles.about__infoDescription}>
                  Приготовим за 3 часа в день заказа. <br />
                  Доставка на авто в холодильнике.
                </p>
                
               
                <div className={styles.about__action}>
                  <a href="#" className={styles.about__actionButton}>Перейти в каталог</a>
                  <p className={styles.about__actionSubtext}>9 различных <br />
                    видов на выбор</p>
                </div>
              </div>
          
              </div>
               
        </div>
    </div>

    </>


  )
}

export default AboutSection;