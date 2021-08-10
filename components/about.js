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

   return <div className={styles.about}>
      <Slider {...settings}>
         {aboutData.map(about => (
            <div className="slide" key={about.title}>
               <h1>{about.title}</h1>
               Test
               {/* Need to render html content */}
               {/* <div>{about.body}</div> */}
            </div>
         ))}
      </Slider>
   </div> 
}