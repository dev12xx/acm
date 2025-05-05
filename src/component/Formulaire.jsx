import React, { Component } from 'react';

class Formulaire extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      motDePasse: '',
      message: '',
      submitted: false
    };
  }

 Change = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  Submit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true });
    console.log('Données envoyées:', this.state);
  }

  render() {
    return (
      <div className="form-container">
        <h2>Formulaire de Contact</h2>
        
        {this.state.submitted ? (
          <p className="success-message">Formulaire envoyé avec succès!</p>
        ) : (
          <form onSubmit={this.Submit}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.Change}
                required
              />
            </div>

            <div className="form-group">
              <label>Mot de passe:</label>
              <input
                type="password"
                name="motDePasse"
                value={this.state.motDePasse}
                onChange={this.Change}
                required
              />
            </div>

            <div className="form-group">
              <label>Message:</label>
              <textarea
                name="message"
                value={this.state.message}
                onChange={this.Change}
                required
              />
            </div>

            <button type="submit" onClick={this.Submit}>
              Envoyer
            </button>
          </form>
        )}
      </div>
    );
  }
}

export default Formulaire;  
