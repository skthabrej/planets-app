import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const ReactSlick = props => {
    const {planetsList} = props
    const settings = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      }  
  return (
    <div className="slider-container">
        <h1 className="heading">PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(eachObject => (
            <PlanetItem
            eachObject={eachObject}
            key={eachObject.id}
            />
        ))}
      </Slider>
    </div>
  )
}

export default ReactSlick