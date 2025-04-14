import { Component } from 'react';

export class PokemonInfo extends Component {
  state = {
    pokemonInfo: '',
  };
  
//   async componentDidUpdate(prevProps) {
//     if (prevProps.pokemonName !== this.props.pokemonName) {
//       const pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`);
//     const pokemon = await pokemons.json();
//     this.setState({ pokemonInfo: pokemon });
//     }
//   }

//   }


  async componentDidUpdate(prevProps) {
    if (prevProps.pokemonName !== this.props.pokemonName) {
      const pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`);
    const pokemon = await pokemons.json();
    this.setState({ pokemonInfo: pokemon });
    }
  }

  render() {
    const { pokemonInfo } = this.state;
    return (
      <>
        {this.state.pokemonInfo ? (
          <div>
            <h2>{this.state.pokemonInfo.name}</h2>
            <img
              src={
                this.state.pokemonInfo.sprites.other['official-artwork']
                  .front_default
              }
              alt="pokemon"
            />
          </div>
        ) : (
          <div>
            <p>Упс! помилка</p>
          </div>
        )}
      </>
    );
  }
}
