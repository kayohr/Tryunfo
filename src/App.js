import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      attr1: '',
      attr2: '',
      attr3: '',
      image: '',
      rare: '',
      cTrunfo: false,
      hTrunfo: false,
      isSaveButtonDisabled: true,
      // onInputChange: '',
      // onSaveButtonClick: '',
      savedCards: [],
    };
  }

  onInputChange = (event) => {
    const { name, type, checked } = event.target;
    const value = type === 'checkbox' ? checked : event.target.value;
    this.setState({
      [name]: value,
    }, this.bttDisabled);
  };

  bttDisabled = () => {
    const { name, description, image, attr1, attr2, attr3 } = this.state;
    // if ([name].includes('')) {
    //   return false;  this.setState?
    // }
    const isName = (name.length !== 0);
    const isDescription = (description.length !== 0);
    const isImage = (image.length !== 0);
    // const isRare = (rare.length !== 0);
    const totalSum = 210;
    const limit = 90;
    const limitZero = 0;
    const limit1 = (Number(attr1) >= limitZero);
    const limit2 = (Number(attr2) >= limitZero);
    const limit3 = (Number(attr3) >= limitZero);
    const allLimit = limit1 && limit2 && limit3;
    const limits1 = (Number(attr1) <= limit);
    const limits2 = (Number(attr2) <= limit);
    const limits3 = (Number(attr3) <= limit);
    const limitsAll = limits1 && limits2 && limits3;
    const result = Number(attr1) + Number(attr2) + Number(attr3);
    const resultFinal = result <= totalSum;
    // if (result <= totalSum) {
    //   return result;
    // }
    // if (limits) {
    //   return limits;
    // }
    const n = isName && isDescription && isImage && allLimit && limitsAll && resultFinal;
    if (n) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  };

  onSaveButtonClick = (e) => {
    e.preventDefault();
    const { name, description, image, attr1,
      attr2, attr3, rare, cTrunfo, hTrunfo } = this.state;
    const newCard = { name, description, image, attr1, attr2, attr3, rare, cTrunfo };
    const valorTrunfo = hTrunfo || cTrunfo;
    if (newCard) {
      this.setState((prevState) => ({
        hTrunfo: valorTrunfo,
        savedCards: [...prevState.savedCards, newCard],
        name: '',
        description: '',
        image: '',
        attr1: '0',
        attr2: '0',
        attr3: '0',
        rare: '',
        cTrunfo: false,
      }));
    //   this.setState = {
    //     name: '',
    //     description: '',
    //     image: '',
    //     attr1: 0,
    //     attr2: 0,
    //     attr3: 0,
    //   };
    // }
    }
  };

  cardREmove = (select) => { // Explicação e ajuda da Ellen e Ivan
    // console.log(select);
    const { savedCards, hTrunfo } = this.state;
    const cardRestantes = savedCards.filter((deck) => deck.name !== select.name);
    // console.log(cardDelet);
    const verificaTRunfo = select.cTrunfo === true ? false : hTrunfo;
    this.setState({
      savedCards: cardRestantes,
      hTrunfo: verificaTRunfo,
    });
  };

  render() {
    const { name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rare,
      cTrunfo,
      isSaveButtonDisabled,
      hTrunfo,
      savedCards,
    } = this.state;
    return (
      <>
        <Form
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ cTrunfo }
          hasTrunfo={ hTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          // savedCards={ savedCards }
          onSaveButtonClick={ this.onSaveButtonClick }
          cardREmove={ this.cardREmove }
        />

        <Card
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ cTrunfo }
        />
        <div className="test4">
          <hr />
          { (savedCards.map((item, index) => (
            <div key={ index }>
              <Card
                cardName={ item.name }
                cardDescription={ item.description }
                cardAttr1={ item.attr1 }
                cardAttr2={ item.attr2 }
                cardAttr3={ item.attr3 }
                cardImage={ item.image }
                cardRare={ item.rare }
                cardTrunfo={ item.cTrunfo }
              />
              <button
                data-testid="delete-button"
                type="submit"
                onClick={ () => this.cardREmove(item) }
              >
                Excluir
              </button>
            </div>
          )))}
        </div>
      </>
    );
  }
}

export default App;
