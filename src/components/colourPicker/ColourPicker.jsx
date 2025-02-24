import { colorPickerOptions } from 'colourPicker';
import css from './ColourPicker.module.css'
import PropTypes from 'prop-types';
import { Component } from "react";





export class ColorOption extends Component {
  render(){
    return <ul className={css.list}>
    {this.props.options.map((option)=>{
    return <li style={{backgroundColor: option.color}}> 
        {option.label}</li>
    })
    
    }
      </ul>
  }
}

 ColorOption.propTypes ={
  colorPickerOptions: PropTypes.array
 }


