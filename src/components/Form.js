import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>

          {/* Este campo será usado para inserir o nome da carta. */}
          <label htmlFor>
            <input type="text" data-testid="name-input" />
          </label>

          {/* Este campo será usado para inserir a descrição da carta. */}
          <label htmlFor>
            <input type="textarea" data-testid="description-input" />
          </label>

          {/* Este campo será usado para inserir o primeiro atributo da carta. */}
          <label htmlFor>
            <input type="number" data-testid="attr1-input" />
          </label>

          {/* Este campo será usado para inserir o segundo atributo da carta */}
          <label htmlFor>
            <input type="number" data-testid="attr2-input" />
          </label>

          {/* Este campo será usado para inserir o terceiro atributo da carta */}
          <label htmlFor>
            <input type="number" data-testid="attr3-input" />
          </label>

          {/* Este campo será usado para inserir o caminho para imagem da carta. */}
          <label htmlFor>
            <input type="texte" data-testid="image-input" />
          </label>

          {/* Este campo será usado para inserir a raridade da carta e deverá ter as options
          : normal, raro e muito raro. */}
          <label htmlFor>
            {/* <input type="select" data-testid="rare-input" */}
            <select data-testid="rare-input">
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
            {/* /> */}
          </label>

          {/* Este campo será usado para inserir se a carta é o Super Trunfo. */}
          <label htmlFor>
            <input type="checkbox" data-testid="trunfo-input" />
          </label>

          {/* um buttonque contenha o atributo data-testid="save-button" e que tenha o texto "Salvar". */}
          {/* <label htmlFor> */}
          <button type="submit" data-testid="save-button">Salvar</button>
          {/* </label> */}

        </form>
      </div>
    );
  }
}

export default Form;
