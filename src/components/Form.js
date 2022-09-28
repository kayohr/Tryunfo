import PropTypes from 'prop-types';
import React from 'react';

class Form extends React.Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <div>
        <form>

          {/* Este campo será usado para inserir o nome da carta. */}
          <label htmlFor="cardName">
            <input
              type="text"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
              name="name"
            />
          </label>

          {/* Este campo será usado para inserir a descrição da carta. */}
          <label htmlFor="cardDescription">
            <input
              type="textarea"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
              name="description"
            />
          </label>

          {/* Este campo será usado para inserir o primeiro atributo da carta. */}
          <label htmlFor="cardAttr1">
            <input
              type="number"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
              name="attr1"
            />
          </label>

          {/* Este campo será usado para inserir o segundo atributo da carta */}
          <label htmlFor="cardAttr2">
            <input
              type="number"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
              name="attr2"
            />
          </label>

          {/* Este campo será usado para inserir o terceiro atributo da carta */}
          <label htmlFor="cardAttr3">
            <input
              type="number"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
              name="attr3"
            />
          </label>

          {/* Este campo será usado para inserir o caminho para imagem da carta. */}
          <label htmlFor="cardImage">
            <input
              type="texte"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
              name="image"
            />
          </label>

          {/* Este campo será usado para inserir a raridade da carta e deverá ter as options
          : normal, raro e muito raro. */}
          <label htmlFor="cardRare">
            {/* <input type="select" data-testid="rare-input" */}
            <select
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
              name="rare"
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
            {/* /> */}
          </label>

          {/* Este campo será usado para inserir se a carta é o Super Trunfo. */}
          {hasTrunfo ? (<p>Você já tem um Super Trunfo em seu baralho</p>) : (
            <label htmlFor="cardTrunfo">
              <input
                type="checkbox"
                data-testid="trunfo-input"
                checked={ cardTrunfo }
                onChange={ onInputChange }
                name="cTrunfo"
              />
            </label>
          )}

          {/* um buttonque contenha o atributo data-testid="save-button" e que tenha o texto "Salvar". */}
          {/* <label htmlFor> */}
          <button
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar

          </button>
          {/* </label> */}

        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
