import { PaintingList  }  from "./Painting/PaintingList"
import { Greeting } from "./Greeting"
import { Subtittle } from "./Subtittle"
import data from "../data.json"
import { Alert } from "./Alert/Alert"
import PropTypes from 'prop-types';
import { Container } from "./Container"
import { GlobalStyle } from "Global"
import { Counter } from "./Counter/Counter"
import { Header } from "./Header/Header"
import {Dropdown} from "./Dropdown/Dropdown"
import {ColorOption} from "./colourPicker/ColourPicker"
import { colorPickerOptions } from "colourPicker"


export const App =()=>{
    return <>
    <div>
        <Container>
    {/* <PaintingList data = {data}/> */}
    {/* <Greeting name=' Bob  ' id='5'/> */}
    {/* <Subtittle text = ''/>  */}
    <ColorOption options = {colorPickerOptions}/>
    {/* <Alert text = 'Успішне виконання' type='success'/> */}
   {/* <Alert text = 'Помилка' type='error'/>  */}
     {/* <Alert text = 'Попередження' type='warning'/> */}

{/* <Counter/> */}
{/* <Header/> */}
{/* <Dropdown/> */}
 {/* <GlobalStyle/> */}
         </Container> 






</div>
    </>
}