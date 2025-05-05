import { useRef, useState, useEffect } from 'react';

export const Timer = () => {
  const [time, setTime] = useState(0);
  const ref = useRef(null)
  let timer;
  console.log(timer);
 useEffect(()=>{
  timer = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);
},[time]
    
  );

const stop = (timer)=>{
clearInterval(timer)
    

} 



  return (
    <div>
      <p>{time}</p>
      <button type="button" onClick={stop}>Зупинити</button>
    </div>
  );
};
