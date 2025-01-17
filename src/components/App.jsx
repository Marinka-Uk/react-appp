import { PaintingList  }  from "../components/PaintingList"
import { Greeting } from "./Greeting"
import { Subtittle } from "./Subtittle"
import data from "../data.json"

export const App =()=>{
    return <>
    {/* <PaintingList data = {data}/> */}
    <Greeting name=' Bob  ' id='5'/>
    <Subtittle text = ''/>
    </>
}