import { feedback } from "../constants"
import styles from "../style"
import Feedbackcard from "./FeedbackCard"

const Testimonials = () =>  (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>

    <div className=" absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient"/>

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
    <h2 className={styles.heading2}>Lorem ipsum dolor 
        <br className="sm:block hidden"/> consectetur dolor.</h2>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px] `}> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit. Lorem ipsum dolor sit.</p>
        </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-cotainer relative z-[1]" >
      {feedback.map((card) => (
        <Feedbackcard key={card.id} {...card}/>
      ))}
    </div>

    </section>
  )

export default Testimonials