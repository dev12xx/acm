import React, { Component } from 'react';
class Calculatrice extends Component {
  constructor() {
    super();
    this.state = {
      nombre1: '',
      nombre2: '',
      operation: '+',
      resultat: ''
    };
  }
 Change = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  calculer = () => {
    const { nombre1, nombre2, operation } = this.state;
    const num1 = parseFloat(nombre1);
    const num2 = parseFloat(nombre2); 
    if (isNaN(num1) || isNaN(num2)) {
      this.setState({ resultat: 'Veuillez entrer deux nombres valides' });
      return;
    }
    let calcul;
    switch(operation) {
      case '+':
        calcul = num1 + num2;
        break;
      case '-':
        calcul = num1 - num2;
        break;
      case '*':
        calcul = num1 * num2;
        break;
      case '/':
        calcul = num1 / num2;
        break;
      default:
        calcul = 'Operation invalide';
    }  
    this.setState({ resultat: calcul });
  };

  render() {
    const { nombre1, nombre2, operation, resultat } = this.state;

    return (
      
      <div>
        <h2>Calculatrice</h2>
        
        <div>
          <label>Nombre 1: </label>
          <input
            type="number"
            name="nombre1"
            value={nombre1}
            onChange={this.Change}
          />
        </div>
        
        <div>
          <label>Nombre 2: </label>
          <input
            type="number"
            name="nombre2"
            value={nombre2}
            onChange={this.Change}
          />
        </div>

        <div>
          <label>Opération: </label>
          <select 
            name="operation"
            value={operation}
            onChange={this.Change}
          >
            <option value="+">Addition (+)</option>
            <option value="-">Soustraction (-)</option>
            <option value="*">Multiplication (*)</option>
            <option value="/">Division (/)</option>
          </select>
        </div>        
        <button onClick={this.calculer}>
          Calculer
        </button>       
        <p>Résultat: {resultat}</p>
      </div>
      
    );
  }
}
export default Calculatrice;