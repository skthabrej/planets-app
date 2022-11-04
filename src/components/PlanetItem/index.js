import './index.css'

const PlanetItem = props => {
  const{eachObject} = props
  const{name,imageUrl,description} = eachObject
  return (
    <ul>
      <div className="list-items-container">
        <li className="list-items">
          <div className="items-container">
            <img src={imageUrl} alt={`PLANET ${name}`} className='img'/>
            <h1 className="item-heading">{name}</h1>
            <p className="item-paragraph">{description}</p>
          </div>
        </li>
        </div>
    </ul>
  )
} 
export default PlanetItem