import './style.css'
import PropTypes from 'prop-types';

export function Card(props) {

  const {cardData} = props;

  return(
    <div className="cardStructure">
      <img src={cardData.img} alt="" className="card-img" />
      <h2 className="card-name">{cardData.name}</h2>
      <p className="card-title">{cardData.title}</p>
    </div>
  )
}

Card.propTypes = {
  cardData: PropTypes.object,
};