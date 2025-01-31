import s from  './Alert.module.css'
import PropTypes from 'prop-types';

export const Alert = ({text,type})=>{
    return <p className={s[type]}> {text}</p>
}

Alert.propTypes = {
    text : PropTypes.string,
    type : PropTypes.string,
}
