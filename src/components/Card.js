import PropTypes from 'prop-types';
import React from 'react';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <div className="test2">
        <div className="test3">
          <p data-testid="name-card">
            { cardName }

          </p>
        </div>

        <img src={ cardImage } alt={ cardName } data-testid="image-card" />

        <div>
          <p data-testid="description-card">
            { cardDescription }

          </p>
        </div>

        <div>
          <p data-testid="attr1-card">
            { cardAttr1 }
            {' '}
            Force
          </p>
        </div>

        <div>
          <p data-testid="attr2-card">
            { cardAttr2 }
            {' '}
            Speed
          </p>
        </div>

        <div>
          <p data-testid="attr3-card">
            { cardAttr3 }
            {' '}
            Spirit power
          </p>
        </div>

        <div>
          <p data-testid="rare-card">{ cardRare }</p>
        </div>

        <div>{cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : '' }</div>

      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
