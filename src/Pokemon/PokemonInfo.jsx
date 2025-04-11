import { Component } from "react";


export class PokemonInfo extends Component{
    state ={
        PokemonInfo: "",
    }
    async componentDidMount(){
        const pokemons = await fetch('https://pokeapi.co/api/v2/pokemon/miki')
     let pokemon =   await    pokemons.json()
     this.setState({pokemonInfo:pokemon})
    }

render(){
    const {pokemonInfo}= this.state
    return(
        {pokemonInfo??  <h2>{pokemonInfo.name}</h2>}
    )
}

}