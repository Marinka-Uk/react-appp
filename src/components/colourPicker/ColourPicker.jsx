import css from './ColourPicker.module.css'


export const ColourPicker = (props)=>{
return <ul className={css.list}>
{ props.options.map((option)=>{
return <li style={{backgroundColor: option.color}}> 
    {option.label}</li>
})

}
  </ul>


}