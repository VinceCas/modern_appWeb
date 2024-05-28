import styles from "../style"
import Button from "./Button"

const CTA = () =>  (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row
    flex-c0l bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className=" flex-1 flex flex-col">
        <h2 className={styles.heading2}>Lorem ipsum dolor sit amet consectetur elit.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorem aut, 
          numquam provident itaque veritatis voluptatibus molestiae sint?</p>
          
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 sm:mt-0 mt-10`}>
            <Button/>
          </div>
    </section>
)

export default CTA