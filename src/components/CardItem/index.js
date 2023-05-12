// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails, key} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={`${className} common-property`}>
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <div className="image-props">
        <img className="imgUrl" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem
