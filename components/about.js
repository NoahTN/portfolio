import styles from '/styles/about.module.scss'
import Slider from "react-slick"

export default function About({ aboutData }) {
   const settings = {
      slidesToShow:1,
      infinite:true,
      slidesToScroll:1,
      autoplay:true,
      autoplaySpeed: 8000,
      arrows: false,
   }

   return <div className={styles.wrap}>
      <Slider {...settings}>
         {aboutData.map(about => (
            <div className="slide" key={about.title}>
               <h1>{about.title}</h1>
               <p>{about.content}</p>
            </div>
         ))}
      </Slider>
   </div> 
}