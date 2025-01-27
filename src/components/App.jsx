import { PaintingList  }  from "./Painting/PaintingList"
import { Greeting } from "./Greeting"
import { Subtittle } from "./Subtittle"
import data from "../data.json"
import { ColourPicker } from "./colourPicker/ColourPicker"
import { colorPickerOptions } from "colourPicker"


export const App =()=>{
    return <>
    {/* <PaintingList data = {data}/>
    <Greeting name=' Bob  ' id='5'/>
    <Subtittle text = ''/> */}
    <ColourPicker options = {colorPickerOptions} />

    </>
}