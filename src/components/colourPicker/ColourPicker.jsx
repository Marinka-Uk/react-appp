import css from './ColourPicker.module.css'
import PropTypes from 'prop-types';

export const ColourPicker = ({options})=>{
return <ul className={css.list}>
{options.map((option)=>{
return <li style={{backgroundColor: option.color}}> 
    {option.label}</li>
})

}
  </ul>


}

// ColorPicker.propTupes = {
//   options: PropTypes.array
//   }