import { Component } from 'react';

export class Form extends Component {
  state = {
    pokemonName: '',
  };

  onHandleChange = e => {
    this.setState({ pokemonName: e.currentTarget.value });
  };


  handleChange = (e)=>{
    e.preventDefault()
    this.props.onChange(this.state.pokemonName)
  }
  render() {
    return (
      <form onSubmit={(this.handleChange)} action="">
        <input
          type="text"
          value={this.state.pokemonName}
          onChange={this.onHandleChange}
        />
        <button type="submit">знайти</button>
      </form>
    );
  }
}
