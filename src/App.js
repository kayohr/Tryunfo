import React from 'react';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: '',
      hasTrunfo: '',
      isSaveButtonDisabled: '',
      onInputChange: '',
      onSaveButtonClick: '',
    };
  }

  // handleInputChange = (event) => {
  //   const { name, type, checked } = event.target;
  //   const value = type === 'checkbox' ? checked : event.target.value;
  //   this.setState({
  //     [name]: value,
  //   });
  // };

  render() {
    return (
      <Form state={ this.state } />
    );
  }
}

export default App;
