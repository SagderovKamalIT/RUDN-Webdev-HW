import Title from "../Title/Title";
import Button from "../Button/Button";
import AboutParagraph from "./AboutParagraph";
import styles from "./AboutSection.module.scss";
import AboutSpan from "./AboutSpan";

const AboutSection = () => {
  return (
    <>
      <div className={styles.about}>
        <div className="wrap">
          <div className={styles.about__container}>
            <div className={styles.about__info}>
              <AboutSpan>ВКУСНЕЙШИЕ</AboutSpan>

              <Title size="xl" tag="h1">
                Пирожные и капкейки от 150 ₽/шт. с доставкой по Санкт-Петербургу
              </Title>

              <AboutParagraph>
                Приготовим за 3 часа в день заказа. <br />
                Доставка на авто в холодильнике.
              </AboutParagraph>

              <div className={styles.about__action}>
                <Button href="#assortment" size="large" variant="primary">
                  Перейти в каталог
                </Button>

                <p className={styles.about__actionSubtext}>
                  9 различных <br />
                  видов на выбор
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
