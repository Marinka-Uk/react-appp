
import data from '../data.json'
const card1 = data[0]



export const Card = () => {
 return <ul>
  {data.map((paintCard) => {
  return <li key={paintCard.id}>
    <img src={card1.url} alt={card1.title} width="480"/>
    <h2 style={{color: 'tomato'}}>{card1.title}</h2>
    <p>
      Автор: <a href={card1.author.url}>{card1.author.tag}</a>
    </p>
    <p>Ціна: {card1.price} грн</p>
    <p>Наявність: {paintCard.quantity < 5 ? 'товар закінчується' : paintcard.quantity}</p>
    <button type="button">Додати в кошик</button></li>
})}
    
  </ul>} 


const title = <h1>Hello</h1>

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(card)



//   <React.StrictMode>
//   </React.StrictMode>
// );
