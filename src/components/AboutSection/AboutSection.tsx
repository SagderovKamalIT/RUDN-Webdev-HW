import AboutButton from "./AboutButton";
import AboutParagraph from "./AboutParagraph";
import styles from "./AboutSection.module.scss";
import AboutSpan from "./AboutSpan";
import AboutTitle from "./AboutTitle";

const AboutSection = () => {
  return (
    <>
      <div className={styles.about}>
        <div className="wrap">
          <div className={styles.about__container}>
            <div className={styles.about__info}>
              <AboutSpan>ВКУСНЕЙШИЕ</AboutSpan>

              <AboutTitle>
                Пирожные и капкейки от 150 ₽/шт. с доставкой по Санкт-Петербургу
              </AboutTitle>

              <AboutParagraph>
                Приготовим за 3 часа в день заказа. <br />
                Доставка на авто в холодильнике.
              </AboutParagraph>

              <div className={styles.about__action}>
                <AboutButton>Перейти в каталог</AboutButton>

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
