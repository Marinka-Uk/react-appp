import { Component } from 'react';

export class Form extends Component {
  state = {
    pokemonName: '',
  };

  handleChange = (e)=>{
    this.setState({pokemonName: e.currentTarget.value})
  }

  render() {
    return (
      <form >
        <input type="text" value={this.state.pokemonName} onChange={this.handleChange}/>
          <button type='submit'>знайти</button>
      </form>
    );
  }
}
