import { Component } from 'react';
import { PaintingList } from './Painting/PaintingList';
import { Greeting } from './Greeting';
import { Subtittle } from './Subtittle';
import data from '../data.json';
import { Alert } from './Alert/Alert';
import PropTypes from 'prop-types';
import { Container } from './Container';
import { GlobalStyle } from 'Global';
import { Counter } from './Counter/Counter';
import { Header } from './Header/Header';
import { Dropdown } from './Dropdown/Dropdown';
import { ColorOption } from './colourPicker/ColourPicker';
import { colorPickerOptions } from 'colourPicker';
import { Label } from './Label/Label';
import { Form } from './Form/Form';
// import {Form} from '../Pokemon/Form'
// import { PokemonInfo } from 'Pokemon/PokemonInfo';
import {Timer} from './Timer/Timer'
import {complexCompute} from './Counter/Counter'

export class App extends Component {
  state = {
    label: '',
    pokemonName:'',
  };


onName = (name)=>{
  this.setState({pokemonName: name })
}

  // chooseLabel = currentLabel => {
  //   this.setState({ label: currentLabel });
  // };




  render() {
    return (
      <>
        <div>
          <Container>

            <button onClick={
              ()=>{this.state((prevState)=>({timerState: !prevState.timerState}))}
            }>Показати таймер
            </button>
            {this.state.timerState &&   <Timer /> }

            {/* <PaintingList data = {data}/> */}
            {/* <Greeting name=' Bob  ' id='5'/> */}
            {/* <Subtittle text = ''/>  */}
            {/* <ColorOption
              options={colorPickerOptions}
              chooseLabel={this.chooseLabel}
            /> */}
            {/* <Alert text = 'Успішне виконання' type='success'/> */}
            {/* <Alert text = 'Помилка' type='error'/>  */}
            {/* <Alert text = 'Попередження' type='warning'/> */}

            <Counter/>
            {/* <Header/> */}
            {/* <Dropdown/> */}
            {/* <GlobalStyle/> */}
            {/* <Label label={this.state.label} /> */}
            {/* <Form onChange={this.onName} /> */}
            {/* <PokemonInfo pokemonName={this.state.pokemonName}/> */}
        
        




          </Container>
        </div>
      </>
    );
  }
}



// 1 - показати текст "Введіть ім'я покемона" використати тернарник
// frontend-mentor frontend-mentor
// 19:38
// 2 - після сабміту форми показати лоадер (створюємо властивість в стейті і зберігаємо стан лоадера)
// 3 - показати нотифікації при сабміті пустої форми або якщо такого покемона немає
// 4 - обробка помилки