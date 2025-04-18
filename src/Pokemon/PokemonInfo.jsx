
import { Component } from 'react';
import { InfinitySpin } from 'react-loader-spinner'


export class PokemonInfo extends Component {
  state = {
    pokemonInfo: '',
    loading: false,
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
      this.setState({loading: true})
      const pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`);
    const pokemon = await pokemons.json();
    this.setState({ pokemonInfo: pokemon, loading: false });
    }
  }

  render() {
    const { pokemonInfo } = this.state;
    return (
      <>
      {this.props.name? null: <p>Введіть ім`я покемона</p>}

{this.state.loading && <InfinitySpin/> }
        {this.state.pokemonInfo && !this.state.loading ? (
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
