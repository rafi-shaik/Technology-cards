// Write your code here.
import './index.css'

const TechnologyCard = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={`card ${className}`}>
      <h1 className="heading"> {title} </h1>
      <p className="description"> {description} </p>
      <div className="image-container">
        <img src={imgUrl} className="logo" alt={title} />
      </div>
    </li>
  )
}

export default TechnologyCard
