import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Lorem ipsum dolor 
        <br className="sm:block hidden"/> consectetur dolor.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae debitis explicabo ullam saepe ea.</p>

        <Button styles="mt-10" />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card_pics" className="w-[100%] h-[100%] " />
      </div>
    </section>
  )
}

export default CardDeal